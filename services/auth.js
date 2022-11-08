import User from "../model/user.js";
import bcrypt from 'bcrypt';


export class AuthLoginService{
    //login function takes user name and password and return user details
    async Login(username,password){
        const userData = await User.findOne({username:username},{'password':1});
        const isValidUser = await bcrypt.compare(password,userData.password);
        if(userData && isValidUser){
            return userData;
        }
        else{
            return {
                "message":"Username or password doesnot match"
            }
        }
    }
}