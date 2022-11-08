import Cart from '../model/cart.js';
import mongoose from 'mongoose';

export class CartServices{
    async AddProductToCart(product){ 
        /**
         * function that check whether the cart exist or not
         * if not then it create new cart, otherwise
         * update the existing cart value
         */
        const existedData = await Cart.countDocuments({user:mongoose.Types.ObjectId(product['user'])});
        if(existedData === 0){
           const cart = new Cart();
           cart.user = mongoose.Types.ObjectId(product['user']);
           cart.product.push(mongoose.Types.ObjectId(product['product']));
           return await cart.save();
        }
        return await Cart.findOneAndUpdate(
            {
                user:mongoose.Types.ObjectId(product['user'])
            },
            {
                "$push": {product : mongoose.Types.ObjectId(product['product'])}
            },
            {
                new:true
            }
           
            )
    }

    async GetAllCartData(user_id){
        /**
         * function that takes user_id as an argument and returns list of data
         * that matches the user_id
        */
        return await Cart.aggregate([
            {$match:{user : mongoose.Types.ObjectId(user_id)}},
            {
                $lookup:{
                    from : "users",
                    localField:"user",
                    foreignField:"_id",
                    as:"user"
                }
            },
            {
                $unwind : "$user"
            },
            {
                $lookup:{
                    from:"products",
                    localField: "product",
                    foreignField:"_id",
                    as:"product"
                }
            }
        ])
    }
}