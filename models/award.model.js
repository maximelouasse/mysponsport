const mongoose = require('mongoose');

const AwardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "can't be blank"]
    },
    athleteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Athlete',
        required: [true, "can't be blank"]
    }
});

const Award = mongoose.model('Award', AwardSchema);

module.exports = Award;