const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/product_managerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log('Established a connection to the Database'))
    .catch(err => console.log('Something went wrong connecting to the Database', err))