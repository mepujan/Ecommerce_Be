import mongoose,{
    Schema
} from "mongoose";

const ProductOrderSchema = new mongoose.Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    order: {
        type: Schema.Types.ObjectId,
        ref: "Order"
    }
});


module.exports = mongoose.model('OrderList', ProductOrderSchema)