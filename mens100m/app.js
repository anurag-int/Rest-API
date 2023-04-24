const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
app.use(express.json());


// connection with database
require('../mens100m/src/db/conn');

// importing database model
const MensRaking =  require('../mens100m/src/models/mens');

app.use(require('./src/router/mens_rank'));
app.use(MensRaking);
app.listen(PORT,() => {
    console.log(`server started on port ${PORT}`);
})