import Joi from "joi";

export const VendorValidations = {
    CreateOrUpdateVendorValidator:{
        body: Joi.object({
            name:Joi.string().required(),
        })
    }
}