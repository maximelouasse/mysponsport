const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "can't be blank"]
    },
    logo: {
        type: String,
        required: [true, "can't be blank"]
    },
    description: {
        type: String,
        required: [true, "can't be blank"]
    },
    date_creation: {
        type: Date
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "can't be blank"]
    }
});

const BrandModel = mongoose.model('brand', BrandSchema);

module.exports = BrandModel;