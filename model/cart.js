import mongoose from "mongoose";
import {
    Schema
} from "mongoose";

const CartSchema = new mongoose.Schema({
    product: {
        type: Array,
        default:[],
        ref: 'Product'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

export default mongoose.model('Cart', CartSchema);