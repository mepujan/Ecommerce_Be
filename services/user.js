import User from "../model/user.js";
import bcrypt from 'bcrypt';
import config from "../configurations/config.js";
import path from 'path';


export class UserService{
    async CreateNewUser(req){
        /**
         * function that create new user and save it to database
         */
        const user = new User({
            first_name : req.body.first_name,
            middle_name : req.body.middle_name,
            last_name : req.body.last_name,
            email:req.body.email,
            username:req.body.username,
            password: req.body.password,
            street_name:req.body.street_name,
            postal_code:req.body.postal_code,
            city_name:req.body.city_name,
            state:req.body.state,
            country:req.body.country,
            dob:req.body.dob,
            profile_picture_url : path.join(config.host,req.file.path)
            // profile_picture:req.file.path
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password,salt);
        return await user.save();
    }
}