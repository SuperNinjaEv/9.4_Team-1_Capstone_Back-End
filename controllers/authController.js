const auth = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {findAccount, addAccount, getAccountInfo} = require('../queries/auth')

auth.post('/signup', async (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email.toLowerCase(),
    password: req.body.password,
    username: req.body.username,
    dob: req.body.dob,
    city_state: req.body.city_state,
    aboutme:req.body.aboutme
  }

  const existingAccount = await findAccount(newUser.email)
  if (existingAccount.length > 0) {
    res
      .status(405)
      .json({error: 'Account associated with that email already exist'})
  } else if (existingAccount.length === 0) {
    bcrypt.hash(newUser.password, 10, async (error, hash) => {
      if (error) {
        res.status(error).json({error: 'server error'})
      }
      const newAccountInfo = {
        ...newUser,
        password: hash,
      }
      const newAccount = await addAccount(newAccountInfo)
      if (newAccount.error) {
        res.status(500).send(newAccount.error)
      } else {
        const USER = await getAccountInfo(newUser.email)
        const TOKEN = jwt.sign(
          {email: newAccountInfo.email, password: newAccountInfo.password},
          process.env.SECRET_KEY
        )
        res
          .cookie('token', TOKEN, {
            origin: process.env.ORIGIN,
            httpOnly: true,
            secure: true,
          })
          .cookie('checkToken', true, {
            origin: process.env.ORIGIN,
            secure: true,
          })
          .status(200)
          .json({message: 'Account creation Success', user:USER[0]})
      }
    })
  }
})

auth.post('/login', async (req, res) => {
  const {email, password, persist} = req.body
  try {
    const EXISTING_ACCOUNT = await findAccount(email.toLowerCase())
    
    if (EXISTING_ACCOUNT.length === 0) {
      res.status(405).json({error: ' Email not found, register now'})
    } else {
      bcrypt.compare(
        password,
        EXISTING_ACCOUNT[0].password,
        async (error, result) => {
          if (error) {
            res
              .status(500)
              .json({error: 'Sorry, something went wrong.' + error})
          } else if (result) {
            const USER = await getAccountInfo(email.toLowerCase())
            const token = jwt.sign(
              {email: email.toLowerCase(), password: password},
              process.env.SECRET_KEY
            )
            const TIME = 60000
            res
              .cookie('token', token, {
                origin: process.env.ORIGIN,
                expires: persist ? new Date().time + TIME : undefined,
                httpOnly: true,
                secure:true,
                // sameSite:'None'
              })
              .cookie('checkToken', true, {
                origin: process.env.ORIGIN,
                expires: persist ? new Date().time + TIME : undefined,
                secure:true,
                // sameSite:'None'
              })
              .status(200)
              .json({message: 'Welcome Back!', user: USER[0]})
          } else if (!result) {
            res.status(400).json({error: 'Email or password do not match.'})
          }
        }
      )
    }
  } catch (error) {
    res
      .status(500)
      .json({error: 'Server error while signing in, try again later.'})
  }
})
auth.post('/logout', (req, res) => {
  res
    .clearCookie('token', {
      origin: process.env.ORIGIN,
      httpOnly: true,
      secure: true,
    })
    .clearCookie('checkToken', {
      origin: process.env.ORIGIN,
      secure: true,
    })
    .json({message: 'logged out'})
})

auth.post('/token', (req, res) => {
  const {cookie} = req.headers
  const TIME = 60000
  if (cookie === undefined) return
  const token = cookie.split('token=')[1].split(';')[0]
  jwt.verify(token, process.env.SECRET_KEY, async (error, account) => {
    if (account && !error) {
      const USER = await getAccountInfo(account.email)
      res
        .cookie('token', token, {
          origin: process.env.ORIGIN,
          expires: new Date().time + TIME,
          httpOnly: true,
          secure:true
        })
        .cookie('checkToken', true, {
          origin: process.env.ORIGIN,
          expires: new Date().time + TIME,
          secure:true
        })
        .status(200)
        .json({message: `Welcome back ${USER[0].username}`, user: USER[0]})
    }
  })
})

auth.put('/:id', (req, res) => {})
module.exports = auth
