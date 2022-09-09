//1 IMPORT DEPENDENCIES
const express = require("express")
const app = express()
const { faker } = require('@faker-js/faker')

//2 CONFIGFURE EXPRESS
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//faker: create user and company classes
class User{
    constructor(){
        this.password = faker.internet.password()
        this.email = faker.internet.email()
        this.phoneNumber = faker.phone.phoneNumber()
        this.lastName = faker.name.lastName()
        this.firstName = faker.name.firstName()
        this._id = faker.database.mongodbObjectId()
    }
}

class Company{
    constructor(){
        this._id = faker.database.mongodbObjectId()
        this.name = faker.company.bs()
        this.Address = faker.address.streetAddress()
        this.city =  faker.address.city()
        this.state = faker.address.state()
        this.zipCode = faker.address.zipCode()
        this.country = faker.address.country()
    }
}


//3 ROUTES
app.get("/api/randomName", (req, res) =>{
    const randomName = faker.internet.email()
    res.json(randomName)
})

app.get("/api/users/new", (req,res) => {
    const getUser = new User()
    res.json(getUser)
})

app.get("/api/companies/new", (req,res) => {
    const getCompany = new Company()
    res.json(getCompany)
})

app.get("/api/user/company", (req,res) => {
    const getBoth = {
        User: new User,
        Company: new Company
    }
    res.json(getBoth)
})


//OPEN PORT
app.listen(8000, ()=>console.log(`Listening to port: 8000`))