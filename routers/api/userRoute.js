const express = require('express') // require the express framework
const router = express.Router() // use the express router
const { getUsers, UpdateUser, deleteUser } = require('../../controllers/UserController');
router.route('/').get(getUsers)
router.route('/:id').put(UpdateUser).delete(deleteUser)
module.exports = router // export test router to use in server main js