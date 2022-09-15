const products = require("./../models/products.model")

module.exports.testApi = (request, response) => {
    response.json({ Status: "OK", Message:"Message from the Backend"})
}

//getALL
module.exports.allProducts = (req, res) => {
    products.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.status(400).json(err))
}

//getOne
module.exports.getOne = (request, response) => {
    const paramsId = request.params.id
    products.findOne({_id : paramsId})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

//create
module.exports.createProduct = (request, response) => {
    products.create(request.body)
        .then(createProduct => response.json(createProduct))
        .catch(err => response.json(err))
}

//update getOne and Create
module.exports.updateProduct = (request, response) => {
    const paramsId = request.params.id
    const updatedProduct = request.body
    products.findOneAndUpdate(
        {_id : paramsId}, //criteria
        updatedProduct, //updated information
        //options on how data is displayed (different data)
        {new: true, runValidators: true}
        // new: true => returns updated object
        //runValidators (runs validations when something is updated)
    )
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

//delete
module.exports.deleteProduct = (request, response) => {
    products.findOneAndDelete({_id : request.params.id})
        .then(deletedProduct => response.json(deletedProduct))
        .catch(err => response.json(err))
}