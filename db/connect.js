const mongoose = require('mongoose')



const connectDB = (url) => {

    mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })

}

module.exports = connectDB;