const mongoose = require('mongoose');

const SportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "can't be blank"],
        minlength: 3
    }
});

const Sport = mongoose.model('Sport', SportSchema);

module.exports = Sport;