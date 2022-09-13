const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema({
    title :{
        type : String,
        required : [true, "Title is required"],
        minlength : [3, "Title must have more than 3 characters"]
    },
    price : {
        type: Number,
        required : [true, "Must have a price"],
        min : [.01, "Items cannot be free."]
    },
    description : {
        type: String,
        required : [true, "Must have a description of the item"],
        minlength : [10, "Needs to contain more than 10 characters"]
    }
},  {timestamps: true})


const products = mongoose.model('products', productsSchema)

module.exports = products