import express from 'express';
import ConnectionDB from './db.js';
import config  from './configurations/config.js';
import routes from './routers/brand.js';
import vendorRoutes from './routers/vendors.js';
import authRouter from './routers/auth.js';
import { ErrorHandler } from './middleware/errorHandler.js';
import bodyParser from 'body-parser';
import userRouter from './routers/user.js';
import productRouter from './routers/products.js';
import cartRouter from './routers/cart.js';
import cors from 'cors';


const app = express();
app.use(cors());
app.use('/images',express.static('images'));

//app.use('/images',express.static(path.join(__dirname,'images'))); -- can also be done this way

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use(routes);
app.use(vendorRoutes);
app.use(userRouter);
app.use(authRouter);
app.use(productRouter);
app.use(cartRouter);
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

