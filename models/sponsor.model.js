const mongoose = require('mongoose');

const SponsorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "can't be blank"]
    },
    logo: {
        type: String,
        required: [true, "can't be blank"]
    },
    athleteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Athlete',
        required: [true, "can't be blank"]
    }
});

const Sponsor = mongoose.model('Sponsor', SponsorSchema);

module.exports = Sponsor;