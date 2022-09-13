const JokesController = require("./../controller/jokes.controller")

//always use /api/ in routes to show it is a backend route
//also helps with depolyment
module.exports = (app) => {
    app.get("/api/test", JokesController.testApi)
    app.get("/api/jokes", JokesController.allJokes)
    app.get("/api/jokes/:id", JokesController.oneJoke)
    app.post("/api/jokes", JokesController.createJoke)
    app.put("/api/jokes/:id", JokesController.updateJoke)
    app.delete("/api/jokes/:id", JokesController.deleteJoke)

}