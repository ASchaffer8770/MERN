//1 IMPORT DEPENDENCIES
const express = require("express")
const app = express()

//2 CONFIGFURE EXPRESS
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//3 ROUTES




//OPEN PORTS
app.listen(8000, ()=>console.log(`Listening to port: 8000`))