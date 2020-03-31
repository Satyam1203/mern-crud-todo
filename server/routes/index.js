const routes = require('express').Router(),
    Todo = require('../models/todo');

// Show All Todos
routes.get("/todos",(req,res)=>{
    try {
        Todo.find({}, (err,todo)=>{
            if(err) console.log("Error "+err);
            else if(!todo) console.log("No todo found");
            else{
                res.json(todo);
            }
        })
    } catch (error) {
        console.error(error);
    }
});

// Create new todo
routes.post("/todos", (req,res)=>{
    let description = req.body.description;
    try {
        Todo.create({
            description
        }, (err,todo)=>{
            if(err) console.log("Error "+err);
            else if(!todo) console.log("Cannot create todo");
            else{
                res.json(todo);
            }
        })
    } catch (error) {
        console.error(error);
    }
});

// Show a particular todo
routes.get("/todos/:id", (req,res)=>{
    let id = req.params.id;
    try {
        Todo.findOne({
            _id:id
        }, (err,todo)=>{
            if(err) console.log("Error "+err);
            else if(!todo) console.log("Cannot find todo");
            else{
                res.json(todo);
            }
        })
    } catch (error) {
        console.error(error);
    }
});

// Update a todo
routes.put("/todos/:id", (req,res)=>{
    let id = req.params.id;
    let description = req.body.description;
    try {
        Todo.findOneAndUpdate({
            _id:id
        }, 
        { description }, 
        (err,todo)=>{
            if(err) console.log("Error "+err);
            else if(!todo) console.log("Cannot find todo to update");
            else{
                res.json(todo);
            }
        })
    } catch (error) {
        console.error(error);
    }
});

// Delete a todo
routes.delete("/todos/:id", (req,res)=>{
    let id = req.params.id;
    try {
        Todo.findOneAndDelete({
            _id:id
        }, 
        (err,todo)=>{
            if(err) console.log("Error "+err);
            else if(!todo) console.log("Cannot find todo to delete");
            else{
                res.json(todo);
            }
        })
    } catch (error) {
        console.error(error);
    }
});

module.exports = routes;