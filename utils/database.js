import mongoose from 'mongoose';

let isConnected = false; //track DB connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("MongoDB already connected");
        return;
    }

    try {
        
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "todoDB"
        })
        isConnected = true;
    } catch (error) {
        console.log(error);
    }
}