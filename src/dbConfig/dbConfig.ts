import mongoose from 'mongoose';

export async function connect()  {
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connect', ()=>{
            console.log('MongoDB connected successfully');
        });
        connection.on('error', (err)=>{
            console.log('MongoDB connection error. Please make sure MongoDB is running' + err);
            process.exit();
        });
    } catch(error) {
        console.log('something went wrong while connecting to the database');
        console.log(error);
    }
};