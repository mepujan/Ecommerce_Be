import { UserService } from "../services/user.js";

const userService = new UserService();

export class UserController {
    async CreateNewUser(req,res,next){
        /**
         * function that sends newly created user in response
         */
        try{
            const result = await userService.CreateNewUser(req);
            res.send(result);
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
            res.send(results);

        }catch(error){
            next(error);
        }
    }

    async GetUserById(req,res,next){
        /**
         * function that response the single user details as per the userid provided
         */
        try{
            console.log(req.query.id);
            const result = await userService.GetUserById(req.query.id);
            res.send(result);
        }catch(error){
            next(error);
        }
    }

    async UpdateUserById(req,res,next){
        try{
            const updatedData = await userService.UpdateUserById(req.query.id,req.body);
            res.send(updatedData);
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
            res.send(deletedUser);
        }catch(error){
            next(error);
        }
    }

}