import express from 'express';
import config from './config';

const server = express();
server.set('view engine', 'ejs');
server.get('/', (req, res)=> {
    res.render('index');
});


server.use(express.static('public'));

server.listen(config.port, ()=>{
    console.log(`Express is Listening on port ${config.port}`);
});