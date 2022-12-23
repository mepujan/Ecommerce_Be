import { UserService } from "../services/user.js";
import jwt from "jsonwebtoken";
import config from "../configurations/config.js";

const userService = new UserService();

export class UserController {
    async CreateNewUser(req,res,next){
        /**
         * function that sends newly created user in response
         */
        try{
            const result = await userService.CreateNewUser(req);
            const token = jwt.sign({username: result.username,id: result._id,email :result.email},config.secret_key);
            res.status(201).json({user: result, token:token });
        }catch(error){
            next(error);
        }
    }


    async GetAllUsersAccounts(req,res,next){
        /**
         * function that response all the user saved in database
         */
        try{
            const results = await userService.GetAllUsersAccounts();
            res.json(results);

        }catch(error){
            next(error);
        }
    }

    async GetUserById(req,res,next){
        /**
         * function that response the single user details as per the userid provided
         */
        try{
            const result = await userService.GetUserById(req.query.id);
            res.json(result);
        }catch(error){
            next(error);
        }
    }

    async UpdateUserById(req,res,next){
        try{
            const updatedData = await userService.UpdateUserById(req.query.id,req.body);
            res.json(updatedData);
        }catch(error){
            next(error);
        }

    }


    async DeleteUserById(req,res,next){
        /**
         * send deleted object response
         */
        try{
            const deletedUser = await userService.DeleteUserById(req.query.id);
            res.json(deletedUser);
        }catch(error){
            next(error);
        }
    }

}