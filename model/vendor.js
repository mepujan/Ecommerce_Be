import mongoose, {
    Schema
} from "mongoose";

const VendorSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: "Name is required"
    }
});

export default mongoose.model("Vendor", VendorSchema);