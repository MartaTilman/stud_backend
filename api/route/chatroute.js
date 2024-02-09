const express = require('express');
const notesController = require('../controllers/notescontroller');

const router = express.Router();

router.post('/notes', notesController.createNote);

module.exports = router;
