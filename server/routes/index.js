const routes = require('express').Router();

// Show All Todos
routes.get("/todos",(req,res)=>{

});

// Create new todo
routes.post("/todos");

// Show a particular todo
routes.get("/todos/:id");

// Update a todo
routes.put("/todos/:id");

// Delete a todo
routes.delete("/todos/:id");

module.exports = routes;