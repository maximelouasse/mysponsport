const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: false,
        unique: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, "is invalid"]
    },
    password: {
        type: String,
        required: [true, "can't be blank"]
    },
    last_connexion: {
        type: Date
    },
    role: {
        type: String,
        enum: ["athlete", "brand"],
        required: [true, "can't be blank"]
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;