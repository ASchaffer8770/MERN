const authorController = require("./../controllers/author.controller")

module.exports = (app) => {
    app.get("/api/test", authorController.testApi)
    app.post("/api/author", authorController.addAuthor)
    app.get("/api/author", authorController.allAuthors)
    app.get("/api/author/:id", authorController.oneAuthor)
    app.put("/api/author/:id", authorController.updateAuthor)
    app.delete("/api/author/:id", authorController.deleteAuthor)
}