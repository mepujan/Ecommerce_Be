import Joi from 'joi';

export const ProductValidation = Joi.object({
    product_name : Joi.string().required().label("product_name"),
    price : Joi.number().required().label("price"),
    vendor: Joi.object().label('vendor'),
    brand : Joi.object().label('brand'),
    description: Joi.string().required().label('description'),
})

// export const ProductValidation={
//     CreateAndUpdateValidator:{
//         body:Joi.object({
//             product_name : Joi.string().required(),
//             price : Joi.number().required(),
//             vendor: Joi.object(),
//             brand : Joi.object(),
//             description: Joi.string().required()
//         })
//     }
// }