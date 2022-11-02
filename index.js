import express from 'express';
import dotenv from 'dotenv';
import ConnectionDB  from './db.js';

dotenv.config();

const app = express();
const Port = process.env.PORT;


const Start = async()=>{
    try{
        await ConnectionDB(`mongodb+srv://mepujan:${process.env.PASSWORD}@cluster0.ve2tabd.mongodb.net/?retryWrites=true&w=majority`);
        app.listen(Port,() => {console.log(`Server is running at port: ${Port}`)});
    }
    catch(err){
        console.log(err);
        console.log("Failed to Connect to Database. Server is not Running");
    }};

Start();