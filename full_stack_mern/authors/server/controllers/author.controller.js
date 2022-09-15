const author = require("./../models/author.model")


//TESTROUTE
module.exports.testApi = (request, response) => {
    response.json({ Message:"Hello from the backend from the Backend"})
}

//GET ALL
module.exports.allAuthors = (request, response) => {
    author.find()
        .then(allAuthors => response.json(allAuthors))
        .catch(err=>response.status(400).json(err))
}

//GETONE
module.exports.oneAuthor = (request, response) => {
    author.findOne({_id: request.params.id})
        .then(oneAuthor => response.json(oneAuthor))
        .catch(err=>response.status(400).json(err))
}

//CREATE
module.exports.addAuthor = (request, response) => {
    author.create(request.body)
        .then(newAuthor=> response.json(newAuthor))
        .catch(err=>response.status(400).json(err))
}

//UPDATE
module.exports.updateAuthor = (request, response) => {
    author.findOneAndUpdate(
        {_id : request.params.id},
        request.body,
        {runValidators: true} //added backend validations on this controller other option is {new:true}
    )
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err=>response.status(400).json(err))
}

//DELETE
module.exports.deleteAuthor = (request, response) => {
    author.deleteOne({_id: request.params.id})
        .then(status=>response.json(status))
        .catch(err=>response.status(400).json(err))
}