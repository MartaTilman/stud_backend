const express = require('express');
const notesController = require('../controllers/notescontroller');

const router = express.Router();

router.get('/notes/:userId', notesController.getNote);
router.post('/notes', notesController.createNote);
router.put('/notes/:noteId', notesController.updateNote);
router.delete('/notes/:noteId', notesController.deleteNote);


module.exports = router;
