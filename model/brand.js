import mongoose, { Schema } from "mongoose";

const BrandSchema = new Schema({
    name :{
        type:String,
        unique:true,
        required:true
    }
});

module.exports = mongoose.model("Brand",BrandSchema);