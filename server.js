import express from 'express';

import config from './config';
import apiRouter from './api';


export const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res)=> {
    res.render('index');
});

server.use(express.static('public'));
server.use('/api', apiRouter);

//Set up mongoose connection
import mongoose from 'mongoose';
const mongoDB = config.db;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

server.listen(config.port, ()=>{
    console.log(`Express is Listening on port ${config.port}`);
});