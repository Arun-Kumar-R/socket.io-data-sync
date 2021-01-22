const express = require('express');
const bodyParser = require('body-parser');
const Mongoose = require('mongoose');
const corss = require('cors');
const socketIo = require("socket.io");

// @Custom files
const env = require('./config/env');

// Custom APIs
const TaskApi = require('./api/Tasks/index');

// @express app initialization
const app = express();
app.use(corss());

// @Database connection
Mongoose.connect(env.dbCon, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const DB = Mongoose.connection;

// @DB Error
DB.on('error', () => {
    console.log('>Error occurred from the Database');
});

// @DB success
DB.once('open', () => {
    console.log(">Database connected succesfully");
});

// @middleware body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api/task', TaskApi);

// @setup Port
const PORT = env.apiPort;

// @listen port
const server = app.listen(PORT, () => {
    console.log('Magic Happens on Port: ' + PORT);
});

const io =  socketIo(server, {
    transport: ["polling", "websocket"],
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

app.set('socketio', io);


