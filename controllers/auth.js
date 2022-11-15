import { AuthLoginService } from "../services/auth.js";
const authLoginService = new AuthLoginService();

export class AuthLoginController{

    async Login(req,res){
        try{
        const {username,password} = req.body;
        const result = await authLoginService.Login(username,password);
        res.send(result);
        }catch(error){
            res.status(401).json({'error':'unauthorized user'});
        }
    }
}