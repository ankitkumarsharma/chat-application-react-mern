const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    sender: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    receiver: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    message: String
},{timestamps: true});

const MessageModel = mongoose.model('Message',MessageSchema);

module.exports = MessageModel;