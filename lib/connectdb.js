import mongoose from 'mongoose';

export const connectDB = connectionString => {
    mongoose.connect(connectionString, {useNewUrlParser: true});
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('connected', () => { console.log('Mongo is Connected.'); } );
    db.on('error', () => { console.log('Mongo connection error.'); } );
};