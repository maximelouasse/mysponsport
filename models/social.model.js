const mongoose = require('mongoose');

const SocialSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["facebook", "instagram", "linkedin"],
        required: [true, "can't be blank"]
    },
    url: {
        type: String,
        required: [true, "can't be blank"],
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "can't be blank"]
    }
});

const Social = mongoose.model('Social', SocialSchema);

module.exports = Social;