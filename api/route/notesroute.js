// notesRoute.js

const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notescontroller');
const authenticateUser = require('../auth/authmiddleware');

// GET /notes
router.get('/', authenticateUser, notesController.getNotes);

// POST /notes
router.post('/', authenticateUser, notesController.createNote);

// PUT /notes/:noteId
router.put('/:noteId', authenticateUser, notesController.updateNote);

// DELETE /notes/:noteId
router.delete('/:noteId', authenticateUser, notesController.deleteNote);

module.exports = router;
