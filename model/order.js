import mongoose from "mongoose";
import { Schema } from "mongoose";

const OrderSchema = new mongoose.Schema({
    product : {
        type: Schema.Types.ObjectId,
        ref:"Product"
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});

module.exports = mongoose.model('Order',OrderSchema);