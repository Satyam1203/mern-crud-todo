const mongoose = require('mongoose'),
    moment = require('moment');

const todoSchema = new mongoose.Schema({
    description: String,
}
,{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  });

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;