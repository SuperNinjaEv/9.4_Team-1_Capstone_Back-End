const auth = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {
  findAccount,
  addAccount,
  getAccountInfo,
  updateAccount,
} = require("../queries/auth");
const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const s3 = new S3Client();

const uploadImageS3 = async (file, imageName) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: imageName,
    Body: file.data,
  };

  try {
    const results = await s3.send(new PutObjectCommand(params));
    console.log(
      "Successfully created " +
        params.Key +
        " and uploaded it to " +
        params.Bucket +
        "/" +
        params.Key
    );

    return results; // For unit tests.
  } catch (err) {
    console.log("Error:", err);
  }
};

auth.post("/signup", async (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email.toLowerCase(),
    password: req.body.password,
    username: req.body.username,
    dob: req.body.dob,
    city_state: req.body.city_state,
    aboutme: req.body.aboutme,
  };
  // Set your secret key. Remember to switch to your live secret key in production.
  // See your keys here: https://dashboard.stripe.com/apikeys
  const stripe = require("stripe")(process.env.STRIPE_API_KEY);

  const existingAccount = await findAccount(newUser.email);
  if (existingAccount.length > 0) {
    res
      .status(405)
      .json({ error: "Account associated with that email already exist" });
  } else if (existingAccount.length === 0) {
    bcrypt.hash(newUser.password, 10, async (error, hash) => {
      if (error) {
        res.status(error).json({ error: "server error" });
      }
      const newAccountInfo = {
        ...newUser,
        password: hash,
      };
      const newAccount = await addAccount(newAccountInfo);
      if (newAccount.error) {
        res.status(500).send(newAccount.error);
      } else {
        const USER = await getAccountInfo(newUser.email);
        const token = jwt.sign(
          { email: newAccountInfo.email, password: newAccountInfo.password },
          process.env.SECRET_KEY
        );

        // const stripeAccount = await stripe.accounts.create({
        //   type: "express",
        //   email: newUser.email,
        // });
        // for refresh_url, this is a redirect if there isa n error. Will create page on frontend for an error
        //for return_url, this is if the user signs up successfully, and redirects to this page
        // const accountLink = await stripe.accountLinks.create({
        //   account: newUser.email,
        //   refresh_url: 'https://craftopia-create.netlify.app/',
        //   return_url: `http://localhost:5173/${newUser.username}/profile`,
        //   type: 'account_onboarding',
        // });

        res.status(200).json({
          message: "Account creation Success",
          user: USER[0],
          token: token,
        });
      }
    });
  }
});

auth.post("/login", async (req, res) => {
  const { email, password, persist } = req.body;
  try {
    const EXISTING_ACCOUNT = await findAccount(email.toLowerCase());

    if (EXISTING_ACCOUNT.length === 0) {
      res.status(405).json({ error: " Email not found, register now" });
    } else {
      bcrypt.compare(
        password,
        EXISTING_ACCOUNT[0].password,
        async (error, result) => {
          if (error) {
            res
              .status(500)
              .json({ error: "Sorry, something went wrong." + error });
          } else if (result) {
            const USER = await getAccountInfo(email.toLowerCase());
            const token = jwt.sign(
              { email: email.toLowerCase(), password: password },
              process.env.SECRET_KEY
            );
            res
              .status(200)
              .json({ message: "Welcome Back!", user: USER[0], token: token });
          } else if (!result) {
            res.status(400).json({ error: "Email or password do not match." });
          }
        }
      );
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Server error while signing in, try again later." });
  }
});

auth.post("/token", (req, res) => {
  const { cookie } = req.body;
  if (cookie === undefined) return;
  const token = cookie;
  jwt.verify(token, process.env.SECRET_KEY, async (error, account) => {
    if (account && !error) {
      const USER = await getAccountInfo(account.email);
      res
        .status(200)
        .json({ message: `Welcome back ${USER[0].username}`, user: USER[0] });
    }
  });
});
auth.post("/logout", (req, res) => {
  res
    .clearCookie("token", {
      // origin: process.env.ORIGIN,
      // secure: true,
    })
    // .clearCookie('checkToken', {
    //   origin: process.env.ORIGIN,
    //   secure: true,
    // })
    .json({ message: "logged out" });
});

auth.put("/:id", async (req, res) => {
  const profilePic = req.files;
  if (profilePic !== null) {
    // await s3.send(
    //   new DeleteObjectCommand({
    //     Bucket: process.env.BUCKET_NAME,
    //     Key: `${req.body.username}-profile-pic`,
    //   })
    // )
    uploadImageS3(profilePic['profile-pic'], `${req.body.username}-profile-pic`)
  }
  const updatedUser = {
    user_id: req.body.user_id,
    profile_pic:
      profilePic === null
        ? req.body.profile_pic
        : `${process.env.CLOUDFRONT_URI}${req.body.username}-profile-pic`,
    learning_interest: req.body.learning_interest,
    current_skillset: req.body.current_skillset,
    city_state: req.body.city_state,
    aboutme: req.body.aboutme,
  };
  const updatedAccountResults = await updateAccount(updatedUser);
  res.status(200).json({ updatedAccount: updatedAccountResults });
});

module.exports = auth;
