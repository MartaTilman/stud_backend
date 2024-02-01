const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
const config = require('./config/db')
const userRoutes = require('./api/route/userroute.js')


mongoose.connect(config.database)
    .then(() => {
        console.log("Database is connected");
    })
    .catch(err => {
        console.log({ database_error: err });
    });
app.use(express.json());
app.use(userRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); app.listen(port, () => {
    console.log(`App is running on ${port}`);

});
