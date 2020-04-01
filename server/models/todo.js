const mongoose = require('mongoose'),
    moment = require('moment');

const todoSchema = new mongoose.Schema({
    description: String,
    date: {type: String, default: ((new Date()).toString()).slice(04,15) },
    time: {type: String, default: ((new Date()).toString()).slice(16,24) }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;