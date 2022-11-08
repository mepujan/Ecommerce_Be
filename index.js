import express from 'express';
import ConnectionDB from './db.js';
import config  from './configurations/config.js';
import routes from './routers/brand.js';
import vendorRoutes from './routers/vendors.js';
import { ErrorHandler } from './middleware/errorHandler.js';
import bodyParser from 'body-parser';
import userRouter from './routers/user.js';
import { fileURLToPath } from 'url';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log("dir name = ",path.join(__dirname,'/images/profile_picture'));

const app = express();
app.use('/images',express.static('images'));

//app.use('/images',express.static(path.join(__dirname,'images'))); -- can also be done this way

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use(routes);
app.use(vendorRoutes);
app.use(ErrorHandler);
app.use(userRouter);

const Start = async () => {
    // server setup
    try {
        await ConnectionDB(config.database_string);
        app.listen(config.port, () => {
            console.log("Successfully connected to the Database....");
            console.log(`Server is running at port: ${config.port}`);
        });
    } catch (err) {
        console.log(err);
        console.log("Failed to Connect to Database. Server is not Running");
    }
};
Start();

