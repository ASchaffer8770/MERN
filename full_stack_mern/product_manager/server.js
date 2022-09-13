const express = require("express")

const app = express()

require('./server/routes/person.routes')(app)

app.listen(8000, () => {
    console.log(`Listening on Port: 8000`)
})