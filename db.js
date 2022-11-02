import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
console.log("Password = ",process.env.PASSWORD);
const ConnectionDB = (url)=>{
    return mongoose.connect(
        url,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true 
        })
};

export default ConnectionDB;