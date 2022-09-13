const express = require("express") //import dependencies
const app = express()
const port = 8000


require("./configs/mongoose.config")//connectes to config file which connects to db


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require("./routes/product.routes")(app)

app.listen(8000, () => console.log(`Listening on Port: 8000`)) //opens port for backend comms