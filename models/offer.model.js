const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "can't be blank"]
    },
    description: {
        type: String,
        required: [true, "can't be blank"]
    },
    budget: {
        type: String,
        required: [true, "can't be blank"]
    },
    start_date: {
        type: Date,
        required: [true, "can't be blank"]
    },
    end_date: {
        type: Date,
        required: [true, "can't be blank"]
    },
    picture: {
        type: String,
        required: [true, "can't be blank"]
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "None"]
    },
    range_age: {
        type: { "min": Number, "max": Number }
    },
    location: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "can't be blank"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const OfferModel = mongoose.model('offer', OfferSchema);

module.exports = OfferModel;