const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const connectDB = require("./db/db")
const port = process.env.PORT

const app = express()


app.get("/", (req, res) => {
  res.send("HELLO from server")
})

connectDB()

app.listen(port, () => console.log(`Server running at ${port}`))