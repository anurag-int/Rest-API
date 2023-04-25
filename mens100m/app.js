const express = require('express');
require('./src/db/conn');
const MensRanking = (require('../mens100m/src/models/mens'));

const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
app.use(express.json());


// connection with database


// importing database model


app.use(require('./src/router/mens_rank.js'));
app.use(MensRanking);
app.listen(PORT,() => {
    console.log(`server started on port ${PORT}`);
})