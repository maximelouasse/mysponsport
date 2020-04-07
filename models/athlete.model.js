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
        type: String,
        required: [true, "can't be blank"]
    },
    professional_email: {
        type: String,
        trim: false,
        unique: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, "is invalid"],
        index: true
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
        ref: 'user',
        required: [true, "can't be blank"]
    }
});

const Athlete = mongoose.model('Athlete', AthleteSchema);

module.exports = Athlete;