const mongoose = require('mongoose');

const SportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "can't be blank"],
        minlength: 3
    }
});

const SportModel = mongoose.model('sport', SportSchema);

module.exports = SportModel;