const mongoose = require('mongoose');

const AthleteSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "can't be blank"],
        minlength: 3
    },
    last_name: {
        type: String,
        required: [true, "can't be blank"],
        minlength: 3
    },
    profil_picture: {
        type: String
    },
    professional_email: {
        type: String,
        trim: false,
        match: [/\S+@\S+\.\S+/, "is invalid"]
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "None"],
        required: [true, "can't be blank"]
    },
    country: {
        type: String,
        required: [true, "can't be blank"]
    },
    city: {
        type: String,
        required: [true, "can't be blank"]
    },
    zipcode: {
        type: String,
        required: [true, "can't be blank"]
    },
    birthday_date: {
        type: Date,
        required: [true, "can't be blank"]
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "can't be blank"]
    },
    practice: {
        type: [{
            sportId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Sport',
                required: [true, "can't be blank"]
            },
            level: {
                type: String,
                enum: ["Débutant", "Amateur", "Semi-Pro", "Pro"],
                required: [true, "can't be blank"]
            }
        }]
    },
    award: {
        type: [{
            title: {
                type: String,
                required: [true, "can't be blank"]
            },
            date: {
                type: Date,
                required: [true, "can't be blank"]
            }
        }]
    },
    sponsor: {
        type: [{
            name: {
                type: String,
                required: [true, "can't be blank"]
            },
            logo: {
                type: String
            }
        }]
    }
});

const AthleteModel = mongoose.model('athlete', AthleteSchema);

module.exports = AthleteModel;