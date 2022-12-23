import { AuthLoginService } from "../services/auth.js";
import jwt from 'jsonwebtoken';
import config from "../configurations/config.js";

const authLoginService = new AuthLoginService();

export class AuthLoginController{

    async Login(req,res){
        try{
        const {username,password} = req.body;
        const result = await authLoginService.Login(username,password);
        if(result.message){
            return res.status(401).json(result);
        }
        const token = jwt.sign({username: result.username, email: result.email, id: result._id},config.secret_key);
        res.status(200).send({user:result, token : token});
        }catch(error){
            res.status(401).json({'error':'unauthorized user'});
        }
    }
}