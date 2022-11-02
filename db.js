import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const ConnectionDB = (url) => mongoose.connect(
    url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

export default ConnectionDB;