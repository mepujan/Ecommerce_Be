import mongoose from "mongoose";
import { Schema } from "mongoose";


const CartProductSchema = new Schema({
    cart:{
        type:Schema.Types.ObjectId,
        ref:'Cart'
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:'Product'
    },
    quantity:Number
});

module.exports = mongoose.model('Cart_Product',CartProductSchema);