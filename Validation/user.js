import Joi from 'Joi';


export const UserValidatior = {
    CreateOrUpdateUserValidator :{
        body:Joi.object({
            first_name : Joi.string(),
            middle_name : Joi.string(),
            last_name : Joi.string(),
            email:Joi.string().email(),
            username:Joi.string(),
            password: Joi.string().min(8),
            street_name:Joi.string(),
            postal_code:Joi.string(),
            city_name:Joi.string(),
            state:Joi.string(),
            country:Joi.string(),
            dob:Joi.date(),
            profile_picture_url : Joi.string(),
            profile_picture: Joi.any()
        })
    }
}