import Joi from 'Joi';

export const UserValidatior = {
    CreateOrUpdateUserValidator :{
        body:Joi.object({
            first_name : Joi.string().required(),
            middle_name : Joi.string(),
            last_name : Joi.string().required(),
            email:Joi.string().email().required(),
            username:Joi.string().required(),
            password: Joi.string().required(),
            street_name:Joi.string().required(),
            postal_code:Joi.string().required(),
            city_name:Joi.string().required(),
            state:Joi.string().required(),
            country:Joi.string().required(),
            dob:Joi.string().required(),
            profile_picture_url : Joi.string()
        })
    }
}