import mongoose, {
    Schema
} from "mongoose";
import isEmail from 'validator/lib/isEmail.js';
import bcrypt from 'bcrypt';

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
    profile_picture_url:{
        type:String,
    },
    profile_picture: {
        type: Buffer,
        contentType: String,
    }
});

UserSchema.pre('save',function(next){
    let user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(10,function(error,salt){
        if (error){
            return next(error)
        }
        bcrypt.hash(user.password,salt,function(error,hash){
            if(error){
                return next(error);
            }
            user.password = hash;
            next()
        })
    })
})

UserSchema.pre('findOneAndUpdate', function () {
    this._update.password = bcrypt.hashSync(this._update.password, 10)
  })

export default mongoose.model('User', UserSchema);