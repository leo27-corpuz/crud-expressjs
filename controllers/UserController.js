const asyncHandler = require('express-async-handler');
const User = require('../models/User')
const {hashpassword} = require('../middleware/passwordUtil')
const getUsers = asyncHandler( async(req, res) => {
    let users = await User.findAll({
        attributes: { exclude: ['email'] },
        where: {
            status: 'active'
        }
    })
    res.status(200).send(users)
})
const UpdateUser = asyncHandler( async(req, res) => {
    //get first the id params
    let id = req.params.id
    //data info update
    let userInfoUpdate = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    }
    const updateuser = await User.update(userInfoUpdate, {where: {id: id}})
    res.status(200).send(updateuser)
})
const deleteUser = asyncHandler( async(req, res) => {
    //get first the id params
    let id = req.params.id
    await User.destroy({where: {id: id}})
    res.status(200).send(`User with id ${id} is deleted!`)
})
module.exports = {getUsers, UpdateUser, deleteUser}