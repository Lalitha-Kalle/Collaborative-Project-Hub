require('dotenv').config()
const User = require("../models/User")
const jwt = require("jsonwebtoken")
const { StatusCodes } = require("http-status-codes")

const generateToken = (userId, role) => {
  return jwt.sign(
    {userId, role},
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRY }
  )
}

const signUp = async (req, res) => {
  try {
    const { name, email, password, role, bio} = req.body;

    const existing = await User.findOne({ email })
    if(existing) return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Email already exists"
    })

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Model.create({
      name,
      email,
      password: hashedPassword,
      role,
      bio
    })

    const token = generateToken(user._id, user.role);

    res.status(StatusCodes.CREATED).json({
      token,
      user
    })

  } catch(err) {
    console.error('Signup error', err)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Server error"
    })
  }
}

module.exports = {
  signUp
}