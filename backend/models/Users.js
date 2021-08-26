const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Missing username'],
  },
  email: {
    type: String,
    required: [true, 'Missing email'],
  },
  password: {
    type: String,
    required: [true, 'Missing password'],
  },
})

const User = mongoose.model('User', userSchema)

module.exports = User
