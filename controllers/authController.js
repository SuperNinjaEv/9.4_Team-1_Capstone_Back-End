const auth = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {findAccount, addAccount} = require('')

auth.post('/signup', async (req, res)=>{
    const {email, password} = req.body
    const existingAccount = await findAccount(email)
    if(existingAccount.length > 0){
        res.status(405).json({error:'Account associated with that email already exist'})
    }else if(existingAccount.length === 0){
        bcrypt.hash(password, 10, async(error, hash)=>{
            if(error){
                res.status(error).json({error: 'server error'})
            }
            const newAccountInfo = {
                email,
                password:hash,
            }
            let flag = 1
            const newAccount = await addAccount(newAccountInfo)
            if(newAccount.error){
                flag = 0
                res.status(500).send(newAccount.error)
            }else{
                flag = 1
                const TOKEN = jwt.sign({email:email,password:password}, process.env.SECRET_KEY)
                res
                cookies('token', TOKEN, {
                    origin:process.env.ORIGIN,
                    httpOnly:true,
                    secure:true,
                })
                .cookie(checkToken, true, {
                    origin:process.env.ORIGIN,
                    secure:true,
                })
                .status(200)
                .json({message: 'Account creation Success'})
            }
        })
    }
})
auth.post('/login', async (req, res)=>{
    const {email, password, persist} = req.body
    try{
        const EXISTING_ACCOUNT = await findUser(email)
        if(EXISTING_ACCOUNT.length === 0){
            res.status(405).json({error:' Email not found, register now'})
        }else{
            bcrypt.compare(password, EXISTING_ACCOUNT[0], (error,result)=>{
                if(error){
                    res.status(500).json({error:"Sorry, something went wrong."})
                }else if(result){
                    const TOKEN = jwt.sign({email:email,password:password}, process.env.SECRET_KEY)
                    const TIME = 60000
                    res
                    .cookie('token', TOKEN, {
                        origin:process.env.ORIGIN,
                        expires:persist?new Date().time + TIME: undefined,
                        httpOnly:true,
                        secure:true,
                    })
                    .cookie('checkToken', true, {
                        origin:process.env.ORIGIN,
                        expires:persist?new Date().time + TIME: undefined,
                        secure:true,
                    })
                    .status(200)
                    .json({message:'Welcome Back!'})
                }else if(!result){
                    res.status(400).json({error:"Email or password do not match."})
                }
            })
        }
    }
    catch(error){
        res.status(500).json({error:'Server error while signing in, try again later.'})
    }
})

auth.post('/token-sign-in', (req, res)=>{
    const {cookie} = req.headers
    if(cookie === undefined)return
    const TOKEN = cookie.split('token=')[1].split(';')[0]
    console.log(TOKEN)
    jwt.verify(TOKEN, process.env.SECRET_KEY, async (error, account)=>{
        console(account,error)
        if(account && !error){
            res
            .cookie('token', TOKEN, {
                origin:process.env.ORIGIN,
                expires:new Date().time + TIME,
                httpOnly:true,
                secure:true,
            })
            .cookie('checkToken', true, {
                origin:process.env.ORIGIN,
                expires:new Date().time + TIME,
                secure:true,
            })
            .status(200)
            .json({message:`Welcome back ${user.email}`})
        }
    })
})