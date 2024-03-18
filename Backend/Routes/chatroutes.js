const express = require('express');
const router = express.Router();
const {
    sendMessage,
    getAllConversationsForUser,
    getAllMessagesBetweenUsers,
    findconversation,
    lastMessage,
    deleteConversationAndMessages
} = require('../controller/chat');

// Route to get all messages between 2 users
router.get('/messages/:userId1/:userId2', getAllMessagesBetweenUsers);
// Route to get last message between 2 users
router.get('/lastmessage/:userId/:conversationId', lastMessage);
router.delete('/delteconversation/:conversationId', deleteConversationAndMessages);
// Route to get all conversations for a specific user
router.get('/:userId/conversations', getAllConversationsForUser);
router.get('/:user1/:user2', findconversation);
// Route to send a message
router.post('/messages/send', sendMessage);

module.exports = router;



