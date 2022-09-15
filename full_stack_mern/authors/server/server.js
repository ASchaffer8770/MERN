const express = require("express") //import dependencies
const app = express()
const cors = require('cors')


require("./configs/mongoose.config")//connectes to config file which connects to db

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require("./routes/author.routes")(app)

app.listen(8000, () => console.log(`Listening on Port: 8000`)) //opens port for backend comms