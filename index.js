import express from 'express';
import ConnectionDB from './db.js';
import config  from './configurations/config.js';
import routes from './routers/brand.js'

const app = express();
app.use(express.json());
app.use(routes);

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