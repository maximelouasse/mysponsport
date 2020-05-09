const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "can't be blank"]
    },
    date_creation: {
        type: Date,
        required: [true, "can't be blank"]
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "can't be blank"]
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "can't be blank"]
    }
});

const MessageModel = mongoose.model('message', MessageSchema);

module.exports = MessageModel;