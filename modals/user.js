import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema ({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique:true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
        
    },
    // isVerified: {
    //     type: Boolean,
    //     default: false
    // },
    // isAdmin: {
    //    type: Boolean,
    //    default: false 
    // },
    // forgotPasswordToken: String,
    // forgotPasswordTokenExpiry: Date,
    // verifyToken: String,
    // verifyTokenExpiry: Date
});

const User = models.User || model('User', UserSchema);
export default User;