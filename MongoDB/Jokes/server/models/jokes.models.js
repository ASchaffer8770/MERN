const mongoose = require("mongoose")

const JokesSchema = new mongooose.Schema({
    setup: {
        type: String,
        required: [true, "Joke setup is required."],
        minlength: [3, "Setup must be more than 3 characters long."]
    },
    punchline:{
        type: String,
        required: [true, "Punchline is required."],
        minlength: [3, "Punchline must be more than 3 characters long."]
    },
}, { timestamps : true})

const Jokes = mongoose.model('Jokes', JokesSchema)

module.exports = Jokes