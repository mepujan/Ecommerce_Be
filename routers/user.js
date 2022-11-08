import express from 'express';
import { UserController } from '../controllers/user.js';
import {ProfilePictureStorage } from '../image_handler/handler.js';
import { UserValidatior } from '../Validation/user.js';
import { validate } from 'express-validation';
import multer from 'multer';

const userRouter = express.Router();
const userController = new UserController();
const uploadProfileImage = multer({storage:ProfilePictureStorage});


userRouter.post('/signup',validate(UserValidatior.CreateOrUpdateUserValidator),uploadProfileImage.single("profile_picture"),userController.CreateNewUser);

export default userRouter;