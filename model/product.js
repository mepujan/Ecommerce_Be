import mongoose from "mongoose";
import { Schema } from "mongoose";

const ProductModelSchema = new mongoose.Schema(
    {
        product_name:{
            type: String,
            require:true
        },
        price:{
            type:Number,
            required:true
        },
        vendor: {
            type:Schema.Types.ObjectId,
            ref:'Vendor'
        },
        brand:{
            type:Schema.Types.ObjectId,
            ref:'Brand'
        },
        descriptions:String,
        product_slug: String,
        created_at: {
            type:Date,
            default:Date.now()
        }

    }
);

module.exports = mongoose.model("Product",ProductModelSchema);
