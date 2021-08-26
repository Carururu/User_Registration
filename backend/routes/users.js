const express = require('express')
const Router = express.Router()
const { GetAllUsers, CreateUser } = require('../controllers/UserController')

Router.route('/').get(GetAllUsers).post(CreateUser)

Router.route('/:id').get().patch().delete()

module.exports = Router
