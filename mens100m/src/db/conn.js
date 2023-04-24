const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect("mongodb://0.0.0.0:27017/olympics")
.then(()=>{
    console.log("Successfully connected with MongoDB");
})
.catch((err)=>{
    console.log("Not Connection");
    console.log(err);
})