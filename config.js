import {load} from 'dotenv';
load();

export default {
    port: process.env.SERVER_PORT,
    db: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
};
