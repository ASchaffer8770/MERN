// 1) import all dependencies that are needed
const express = require("express")
const app = express()
const { faker } = require('@faker-js/faker')



// 2) express configuration
app.use(express.json())
app.use(express.urlencoded({extended: true}))



//3) Routes
app.get("/api/randomName"), (req, res)=>{
    const randomName = faker.name.bear()
    res.json(randomName)
}

// 4) Open and Listen to Port
app.listen(8000, ()=>console.log(`Listening to port: 8000`))