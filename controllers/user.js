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
}