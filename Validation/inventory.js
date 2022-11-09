import Joi from "joi";

export const InventoryDataValidation ={
    CreateAndUpdateValidation:{
        body:Joi.object({
            name:Joi.string().required(),
            address: Joi.string.required()
        })
    }
}