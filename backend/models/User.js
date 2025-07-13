const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "User Name is required"],
    trim: true,
    minLength: 3,
    maxLength: 50
  },
  email: {
    type: String,
    required: [true, "User name is required"],
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S/, "Please enter a valid email address (must include '@' and a domain, e.g., user@example.com)"],
  },
  password: {
    type: Number,
    required: [true, "User Password is required"],
    minLength: 6
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  }, 
  bio: {
    type: String,
    maxLength: 50
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post', 
  }],
}, { timestamps: true})

const User = mongoose.model("User", userSchema)

module.exports = User