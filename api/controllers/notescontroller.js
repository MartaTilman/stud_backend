// Import the Notes Model
const Notes = require('../models/notesmodel');

exports.getNotes = async (req, res) => {
    try {
        const userId = req.user._id; // Assuming user ID is available in the JWT token
        const notes = await Note.find({ user: userId });
        res.status(200).json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const userId = req.user._id; // Assuming user ID is available in the JWT token
        const newNote = new Note({ title, content, user: userId });
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateNote = async (req, res) => {
    try {
        const userId = req.user._id; // Assuming user ID is available in the JWT token
        const { noteId } = req.params;
        const { title, content } = req.body;

        const updatedNote = await Note.findOneAndUpdate(
            { _id: noteId, user: userId },
            { title, content },
            { new: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found or not authorized' });
        }

        res.status(200).json(updatedNote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteNote = async (req, res) => {
    try {
        const userId = req.user._id; // Assuming user ID is available in the JWT token
        const { noteId } = req.params;

        const deletedNote = await Note.findOneAndDelete({ _id: noteId, user: userId });

        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found or not authorized' });
        }

        res.status(200).json(deletedNote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
