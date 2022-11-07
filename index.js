import express from 'express';
import ConnectionDB from './db.js';
import config  from './configurations/config.js';
import routes from './routers/brand.js';
import vendorRoutes from './routers/vendors.js';
import { ErrorHandler } from './middleware/errorHandler.js';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
app.use(vendorRoutes);
app.use(ErrorHandler);

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