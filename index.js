import express from 'express';
import ConnectionDB from './db.js';
import config  from './configurations/config.js';
import routes from './routers/brand.js';
import vendorRoutes from './routers/vendors.js';
import { ErrorHandler } from './middleware/errorHandler.js';
import bodyParser from 'body-parser';
import userRouter from './routers/user.js';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('images'));


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