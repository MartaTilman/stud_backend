// chatRouter.js

const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatcontroller');

router.post('/send', chatController.sendMessage);
router.get('/:sender/:receiver', chatController.getMessages);

module.exports = router;
