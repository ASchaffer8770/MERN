const Jokes = require("./../models/jokes.models")

module.exports.testApi = (req, res) => {
    res.json({ Status: "OK" })
}

//get all
module.exports.allJokes = (req, res) => {
    Jokes.find()
    .then(allJokes => res.json(allJokes))
    .catch(err=>res.json(err))
}

//get one
module.exports.oneJoke = (req, res) => {
    res.json()
}

//create
module.exports.createJoke = (req, res) => {
    const newJoke = req.body
    Jokes.create(newJoke)
        .then(joke => res.json(joke))
        .catch(err=>res.json(err))
}

//update
module.exports.updateJoke = (req, res) => {
    res.json()
}

//delete
module.exports.deleteJoke = (req, res) => {
    res.json()
}
