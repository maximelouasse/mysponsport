const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    valide: {
        type: Boolean
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "can't be blank"]
    },
    offerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Offer',
        required: [true, "can't be blank"]
    }
});

const Application = mongoose.model('Application', ApplicationSchema);

module.exports = Application;