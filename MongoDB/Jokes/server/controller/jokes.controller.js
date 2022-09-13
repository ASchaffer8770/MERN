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
    const paramsId = req.params.id
    Jokes.findOne({_id : paramsId})
    .then(joke => res.json(joke))
    .catch(err=>res.json(err))
}


//create
module.exports.createJoke = (req, res) => {
    const newJoke = req.body
    Jokes.create(newJoke)
        .then(joke => res.json(joke))
        .catch(err=>res.json(err))
}

//update getOne + create
module.exports.updateJoke = (req, res) => {
    const paramsId = req.params.id
    const updatedJoke = req.body
    Jokes.findOneAndUpdate(
        {_id : paramsId}, //criteria for finding what to update
        updatedJoke, //updated info
        {new : true, runValidators : true } //options
    )
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err=>res.json(err))
}

//delete
module.exports.deleteJoke = (req, res) => {
    Jokes.findOneAndDelete({_id : req.params.id})
        .then(status => res.json(status))
        .catch(err=>res.json(err))
}
