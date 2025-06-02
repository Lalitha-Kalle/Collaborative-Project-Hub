const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("HELLO from server")
})

app.listen(process.env.PORT, () => console.log("Server running at "+ process.env.PORT))