
import mongoose,{
    Schema
} from "mongoose";

const ProductInventorySchema = new mongoose.Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    inventory: {
        type: Schema.Types.ObjectId,
        ref: "Inventory"
    },
    stock: Number

});

module.exports = mongoose.model('ProductInventory', ProductInventorySchema);