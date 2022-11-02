import mongoose, {
    Schema
} from "mongoose";
import {
    isEmail
} from validator;

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    middle_name: String,
    last_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        validate: [isEmail, "Invalid Email Address."]
    },
    password: {
        type: String,
        required: false,
        select: false
    },
    street_name: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    city_name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    profile_picture: {
        type: Buffer,
        contentType: String
    }
});

module.export = mongoose.model('User', UserSchema);