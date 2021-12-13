const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "name is required"],
        trim: true,
        maxlength: [20, "max length must be less than or equal to 20"]
        
    }, completed:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', taskSchema);