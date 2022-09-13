const productsController = require("./../controllers/products.controller")

module.exports = (app) => {
    app.get("/api/test", productsController.testApi)
    app.get("/api/products", productsController.getAll)
    app.get("/api/products/:id", productsController.getOne)
    app.post("/api/products", productsController.createProduct)
    app.put("/api/products/:id", productsController.updateProduct)
    app.delete("/api/products/:id", productsController.deleteProduct)
}