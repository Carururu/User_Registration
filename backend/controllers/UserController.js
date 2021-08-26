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

exports.GetUserById = GetUserById = async (req, res) => {
  try {
    const userId = req.params.id
    const user = await User.findById(userId)
    res.status(200).json({
      status: 'success',
      data: user,
    })
  } catch (err) {
    console.log(err)
  }
}

exports.UpdateUserById = UpdateUserById = async (req, res) => {
  try {
    const userId = req.params.id
    const updateUser = req.body
    const user = await User.findByIdAndUpdate(userId, updateUser, { new: true })
    res.status(200).json({
      status: 'success',
      data: user,
    })
  } catch (err) {
    console.log(err)
  }
}

exports.DeleteUser = DeleteUser = async (req, res) => {
  try {
    const userId = req.params.id
    await User.findByIdAndDelete(userId)
    res.status(200).json({
      status: 'success',
      message: 'User is deleted',
    })
  } catch (err) {
    console.log(err)
  }
}
