import mongoose from "mongoose";
import { Schema } from "mongoose";  

const InventorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required: true
    }

});


module.exports = mongoose.model('Inventory',InventorySchema);