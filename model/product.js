import mongoose,{
    Schema
} from "mongoose";

const ProductModelSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: "Price is required"
    },
    vendor: {
        type: Schema.Types.ObjectId,
        ref: 'Vendor'
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand'
    },
    image : {
        type:Buffer,
        contentType: String,
    },
    product_image_url : String,
    descriptions: String,
    product_slug: String,
    created_at: {
        type: Date,
        default: Date.now()
    }

});

ProductModelSchema.pre('save',function(next){
    /**
     * this method assigns the product_slug same as the product_name 
     * before saving the data to database
     */
    let product = this;
    product.product_slug = product.product_name;
    next();
})

ProductModelSchema.pre('findOneAndUpdate', function () {
    this._update.product_slug = this._update.product_name;
  })



export default mongoose.model("Product", ProductModelSchema);