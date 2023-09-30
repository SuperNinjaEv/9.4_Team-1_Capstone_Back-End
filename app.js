const express = require('express')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const cors = require('cors')
const jsonParser = express.json()
const app = express()
const authController = require('./controllers/authController')

const toolsController = require("./controllers/toolsController")
const postsController = require('./controllers/postsController')
const fileUpload = require('express-fileupload')
app.use(
  cors({
    origin: process.env.ORIGIN || 'http://localhost:5173',
    credentials: true,
  })
)

app.use(jsonParser)
app.use(fileUpload())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  // res.header('Access-Control-Allow-Credentials', 'true')
  next()
})
app.use('/auth', authController)

app.get('/', (_, res) => res.send('hello'))
app.use('/posts', postsController)
app.use("/tools", toolsController);

// app.post('/create-intent', async (req, res) => {
//   try {
//     // Calculate the total amount based on cart items
//     // For simplicity, assuming a fixed amount here
//     const amount = 2000; // amount in cents, e.g., $20.00

//     // Create a PaymentIntent
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'usd',
//       // Add more attributes as needed
//     });

//     // Send the client secret to the frontend
//     res.json({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// });

app.post('/checkout', async (req, res) => {
  try {
      const { grandTotal } = req.body;
      
      // Convert amount to cents (assuming the frontend sends the amount in dollars)
      const amountInCents = grandTotal * 100;
      
      // Create a PaymentIntent
      const paymentIntent = await stripe.paymentIntents.create({
          amount: amountInCents,
          currency: 'usd',
      });
      
      // Send the client secret to the frontend
      res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
  }
});


module.exports = app
