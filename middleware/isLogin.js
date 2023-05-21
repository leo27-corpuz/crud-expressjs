const isLogin = (req, res, next) => {
    if(req.session.user)  next()
    else res.send('unauthorized')
}
module.exports = isLogin