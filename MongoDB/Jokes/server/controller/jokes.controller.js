const Jokes = require("./../models/jokes.models")

module.exports.testApi = (req, res) => {
    res.json({ Status: "OK" })
}

//get all
module.exports.allJokes = (req, res) => {
    res.json()
}

//get one
module.exports.oneJoke = (req, res) => {
    res.json()
}

//create
module.exports.createJoke = (req, res) => {
    res.json()
}

//update
module.exports.updateJoke = (req, res) => {
    res.json()
}

//delete
module.exports.deleteJoke = (req, res) => {
    res.json()
}
