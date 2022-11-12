import User from "../model/user.js";
import bcrypt from 'bcrypt';
import config from "../configurations/config.js";
import path from 'path';
import user from "../model/user.js";


export class UserService{
    async CreateNewUser(req){
        /**
         * function that create new user and save it to database
         */
        const user = new User(req.body);
        user.profile_picture_url = path.join(config.host,req.file.path);
        return await user.save();
    }

    async GetAllUsersAccounts(){
        /**
         * fetch all the users from the database and return it
         */
        return await User.find({});
    }

    async GetUserById(id){
        //fetch single user from database and return it
        return await user.findById(id);
    }

    async DeleteUserById(id){
        //find object from database and delete it and return the deleted object
        return await user.findByIdAndDelete(id);
    }

    async UpdateUserById(id,updatedData){
        //find data by id and update it with new data and return it
        return await user.findByIdAndUpdate(id,updatedData,{new:true});
    }
}