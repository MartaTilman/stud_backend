const express = require('express')
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const userRoutes = require('./api/route/userroute.js')
const notesRouter = require('./api/route/notesroute.js');


const server = http.createServer(app);
const io = socketIo(server);

app.use(cors({
    origin: 'http://localhost:8080'
}));

connectDB();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(notesRouter);
app.use(userRoutes);



app.use(bodyParser.json()); app.listen(port, () => {
    console.log(`App is running on ${port}`);

});