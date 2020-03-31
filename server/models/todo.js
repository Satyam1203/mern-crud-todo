const mongoose = require('mongoose'),
    moment = require('moment');

const todoSchema = new mongoose.Schema({
    description: String,
    date: {type: String, default: moment().format('DD-MM-YYYY').slice(0,10) },
    time: {type: String, default: moment().format().slice(11,19) }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;