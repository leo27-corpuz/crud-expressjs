const express = require('express') // require the express framework
const router = express.Router() // use the express router
// const { login, viewLogin } = require('../../controllers/AuthController');
router.get('/', (req, res) => {
    res.render('index')
})
module.exports = router // export test router to use in server main js