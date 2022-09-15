const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    firstName :{
        type : String,
        required : [true, "First name is required"],
        minlength : [3, "First name must have more than {MINLENGTH} characters"]
    },
    lastName : {
        type: String,
        required : [true, "Last name is required"],
        minlength : [3, "Last name must have more than {MINLENGTH} characters"]
    }
},  {timestamps: true})


const author = mongoose.model('author', authorSchema)

module.exports = author