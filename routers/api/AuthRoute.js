const express = require('express') // require the express framework
const router = express.Router() // use the express router
const { login, viewLogin, registration, logout } = require('../../controllers/AuthController');
router.route('/login').post(login);
router.route('/registration').post(registration);
router.route('/logout').post(logout);
module.exports = router // export test router to use in server main js