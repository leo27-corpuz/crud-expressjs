const express = require('express')
const cookieParser = require('cookie-parser') // cookie parser
const expressSession = require('express-session')
const isLogin = require('./middleware/isLogin')
// require('./models/User')
require('dotenv').config() // .env connection package
const app = express()

//middlewares
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true})) //form request
app.use(express.json()) //json request
app.use(cookieParser());
app.use(expressSession({
    secret: "ASDASSADASDSDASDASDASDASDASREWRDQWEBVBX",
    resave: false,
    saveUninitialized: false,
}))
//all routers here
const userRoute = require('./routers/api/userRoute')
const AuthRoute = require('./routers/api/AuthRoute')
const WebAuthRoute = require('./routers/web/AuthRoute')
app.use('/api/auth', AuthRoute)
app.use('/api/users', isLogin, userRoute)
app.use('/', WebAuthRoute)
const port = process.env.PORT || 8000; // port number
app.listen(port, () => { // listen to the port and run
    console.log(`Running Express Server on Port ${port}`)
});