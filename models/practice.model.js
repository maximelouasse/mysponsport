const mongoose = require('mongoose');

const PracticeSchema = new mongoose.Schema({
    level: {
        type: String,
        enum: ["Débutant", "Amateur", "Semi-Pro", "Pro"],
        required: [true, "can't be blank"]
    },
    athleteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Athlete',
        required: [true, "can't be blank"]
    },
    sportId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sport',
        required: [true, "can't be blank"]
    }
});

const Practice = mongoose.model('Practice', PracticeSchema);

module.exports = Practice;