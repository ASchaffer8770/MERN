//import express
const express = require("express")
const app = express()
const port = 8000

require("./config/mongoose.config")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.listen(8000, () => console.log(`Listening on Port: 8000`))