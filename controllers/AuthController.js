const asyncHandler = require('express-async-handler');
const User = require('../models/User')
const {hashpassword, validatePassword} = require('../middleware/passwordUtil')
const validateInput = require('../middleware/validateInput')
const viewLogin = asyncHandler( async(req, res) => {
    res.render('index')
})
const login =  asyncHandler( async(req, res) => {
    const { email, password } = req.body
    //check if email and password not empty
    if(!email || !password) res.status(400).send('empty fields')
    if(req.session.user) res.send(`You already login: ${req.session.user.email}`)
    const user = await User.findOne({where: {email: email}})
    if(!user) res.status(400).send('user not exists')
    const passwordV2 = user.password
    if(!validatePassword(password, passwordV2)) res.send('password wrong')
    req.session.user = {email} 
    res.send(`You login: ${req.session.user.email}`)
})
const registration = asyncHandler (async(req, res) => {
    let userInfo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashpassword(req.body.password)
    }
    if(!userInfo.firstName || !userInfo.lastName || !userInfo.email || !userInfo.password)  res.status(400).send('empty fields')
    const findUser = await User.findOne({where: {email: userInfo.email}})
    if(findUser) res.status(400).send('email already exists')
    const user = await User.create(userInfo);
    res.status(200).send(user)
})
const logout = asyncHandler(async(req, res) => {
    req.session.destroy();
    res.send('logout')
})
module.exports = { login, viewLogin, registration, logout}