// notesmodel.js



const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    usernotes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',


    },
    title: String,
    content: String,
    date: {
        type: Date,
        default: Date.now // This sets the default value to the current date and time
    }



});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
