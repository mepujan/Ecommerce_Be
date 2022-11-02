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

module.exports = mongoose.model("Vendor", VendorSchema);