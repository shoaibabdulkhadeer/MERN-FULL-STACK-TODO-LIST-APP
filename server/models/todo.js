const mongoose = require('mongoose')

const todoschema = new mongoose.Schema({
    todo:{
        type:String,
        required:true,
    }
})

const todoModel = new mongoose.model('todo',todoschema)

module.exports=todoModel