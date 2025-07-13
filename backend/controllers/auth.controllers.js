const StatusCodes = require("http-status-codes")
const User = require("../models/User")

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
    console.error("")
    res.status().json({})
  }
}

module.exports = {
  signUp
}