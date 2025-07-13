require('dotenv').config()
const mongoose = require("mongoose")

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected")
  })
  .catch((err) => {
    console.error("Error in DB connection", err)
  })
}


module.exports = connectDB