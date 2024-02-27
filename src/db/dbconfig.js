import mongoose from 'mongoose';

export async function connect (){
    try {
        mongoose.connect(process.env.MONGODB_URI);
        const connection = mongoose.connection

        connection.on('Connected',()=>{
            console.log('MongoDB connected sucessfully');
        })
        connection.on('error',(error)=>{
            console.log('make sure mongoDB is running'+error);
        })
    } catch (error) {
        console.log('mongoDB connection failed');
        console.log(error);
    }
}