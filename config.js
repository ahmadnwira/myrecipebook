import {load} from 'dotenv';

load();

const devUrl = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const testUrl = 'mongodb://localhost:27017/testing';

export default {
    port: process.env.SERVER_PORT,
    db: process.env.NODE_ENV == 'test' ? testUrl : devUrl
};
