// Import mongoose or any other ORM/ODM library you're using
const mongoose = require('mongoose');

// Define the schema for your notes
const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

// Create a model based on the schema
const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
