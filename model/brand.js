import mongoose, {
    Schema
} from "mongoose";

const BrandSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
});

export default mongoose.model("Brand", BrandSchema);