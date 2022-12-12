const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config();
const port = 3000;
const app = express();
const mongostr=process.env.DB_URL;
const routes=require('./routes/routes');

mongoose.set('strictQuery',true);   
mongoose.connect(mongostr);

const db=mongoose.connection;

db.on('error',(error) =>{
    console.log(error);
});

db.once('connected',() =>{
    console.log("DB Connected");
});


app.use('/api',routes);


app.use(express.json());

app.listen(port,() =>{
    console.log("Server running at port:"+port);
})