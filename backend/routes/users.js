const express = require('express')
const Router = express.Router()
const { GetAllUsers } = require('../controllers/UserController')

Router.route('/').get(GetAllUsers).post()

Router.route('/:id').get().patch().delete()

module.exports = Router
