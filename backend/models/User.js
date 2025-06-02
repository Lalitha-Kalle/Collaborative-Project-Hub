const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: Number, 
  role: String, 
  bio: String,
})

const User = mongoose.model("User", userSchema)
console.log(User)
module.exports = User