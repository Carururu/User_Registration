const app = require('./app.js')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

const DB = 'mongodb://localhost:27017/todos'

const ConnectToMongo = async (DB) => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('Connected to Mongo')
  } catch (err) {
    console.log(err)
  }
}

ConnectToMongo(DB)
const port = 8000
app.listen(port, () => console.log(`Server Started on port ${port}`))