import Joi from "joi";


export const BrandValidations = {
    CreateOrUpdateBrandValidator:{
        body: Joi.object({
            name:Joi.string().required(),
        })
    }
}