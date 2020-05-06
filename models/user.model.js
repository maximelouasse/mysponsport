const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: false,
        unique: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, "is invalid"],
        index: true
    },
    password: {
        type: String,
        required: [true, "can't be blank"]
    },
    role: {
        type: String,
        enum: ["athlete", "brand"],
        required: [true, "can't be blank"]
    },
    social_network: {
        type: [{
            type: {
                type: String,
                enum: ["facebook", "instagram", "linkedin"],
                required: [true, "can't be blank"]
            },
            url: {
                type: String,
                required: ['true', "can't be blank"]
            }
        }]
    },
    application: {
        type: [{
            offerId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Offer',
                required: [true, "can't be blank"]
            },
            valide: {
                type: Boolean,
                default: false
            },
            createdAt: {
                type: Date,
                default: Date.now
            },
            dateValide: {
                type: Date
            }
        }]
    },
    last_connexion: {
        type: Date
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;