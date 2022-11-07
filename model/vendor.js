import mongoose, {
    Schema
} from "mongoose";

const VendorSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
});

export default mongoose.model("Vendor", VendorSchema);