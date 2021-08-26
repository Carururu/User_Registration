const express = require('express')
const Router = express.Router()
const {
  GetAllUsers,
  CreateUser,
  GetUserById,
  UpdateUserById,
  DeleteUser,
} = require('../controllers/UserController')

Router.route('/').get(GetAllUsers).post(CreateUser)

Router.route('/:id').get(GetUserById).patch(UpdateUserById).delete(DeleteUser)

module.exports = Router
