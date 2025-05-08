import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    },
    phone: {
        type: String,
    },
    password: {
        type: String,
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
