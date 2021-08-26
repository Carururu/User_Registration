const User = require('../models/Users')

exports.GetAllUsers = GetAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({})
    res.status(200).json({
      status: 'success',
      data: allUsers,
    })
  } catch (err) {
    console.log(err)
  }
}

exports.CreateUser = CreateUser = async (req, res) => {
  try {
    const newUser = req.body
    const user = await User.create(newUser)
    res.status(200).json({
      status: 'success',
      data: user,
    })
  } catch (err) {
    console.log(err)
  }
}
