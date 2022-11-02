import mongoose from "mongoose";
import {
    Schema
} from "mongoose";

const CartSchema = new mongoose.Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Cart', CartSchema);