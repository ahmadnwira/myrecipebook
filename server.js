import express from 'express';
import bodyParser from 'body-parser';

import config from './config';
import apiRouter from './api';
import { connectDB } from './lib/connectdb';


export const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res)=> {
    res.render('index');
});

/* Middleware */
server.use(express.static('public'));
server.use(bodyParser.json());
server.use('/api', apiRouter);

connectDB(config.db);

server.listen(config.port, ()=>{
    console.log(`Express is Listening on port ${config.port}`);
});