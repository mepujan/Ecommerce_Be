import { AuthLoginService } from "../services/auth.js";
const authLoginService = new AuthLoginService();

export class AuthLoginController{

    async Login(req,res,next){
        try{
        const {username,password} = req.body;
        const result = await authLoginService.Login(username,password);
        res.send(result);
        }catch(error){
            next(error);
        }
    }
}