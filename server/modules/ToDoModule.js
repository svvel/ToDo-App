const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    text:{
        type:String,
        require: true
    }
})

const TodoModel = mongoose.model('ToDO',TodoSchema)

module.exports = TodoModel