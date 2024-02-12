const express = require('express')
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/db')
const userRoutes = require('./api/route/userroute.js')
const notesRouter = require('./api/route/notesroute.js');


const server = http.createServer(app);
const io = socketIo(server);

app.use(cors({
    origin: 'https://startling-tarsier-c29251.netlify.app'
}));

mongoose.connect(config.database)
    .then(() => {
        console.log("Database is connected");
    })
    .catch(err => {
        console.log({ database_error: err });
    });



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(notesRouter);
app.use(userRoutes);



app.use(bodyParser.json()); app.listen(port, () => {
    console.log(`App is running on ${port}`);

});
