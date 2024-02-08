// chatController.js

const Chat = require('../models/chatmodel');

exports.sendMessage = async (req, res) => {
    try {
        const { sender, receiver, message } = req.body;
        const newMessage = new Chat({ sender, receiver, message });
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getMessages = async (req, res) => {
    try {
        const { sender, receiver } = req.params;
        const messages = await Chat.find({ sender, receiver }).sort('createdAt');
        res.status(200).json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
