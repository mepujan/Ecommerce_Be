import express from 'express';
import { AuthLoginController } from '../controllers/auth.js';


const authRouter = express.Router();
const authController = new AuthLoginController();


authRouter.post('/auth/login',authController.Login);

export default authRouter;