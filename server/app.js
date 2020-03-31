const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    dotenv = require('dotenv'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    Todo = require('./models/todo'),
    indexRoutes = require('./routes/index');

dotenv.config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
},
(err)=>{
    if(err) console.log("Error : "+err);
    else console.log("Database connection established");
})

app.get('/todos', indexRoutes);
app.post('/todos', indexRoutes);
app.get('/todos/:id', indexRoutes);
app.put('/todos/:id', indexRoutes);
app.delete('/todos/:id', indexRoutes);

app.get("/data", (req,res)=>{
    res.json({
        name: 'Satyam',
        city: 'Raipur'
    })
})

app.listen(process.env.PORT, ()=>console.log(`Serving at ${process.env.PORT}`))