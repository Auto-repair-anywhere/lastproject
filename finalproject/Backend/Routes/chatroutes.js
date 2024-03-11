// const express = require('express');
// const chatrouter = express.Router();
// const {
//     createMessage,
//     getAllMessages,
//     updateMessage,
//     deleteMessage,
// } = require('../controller/chat');

// chatrouter.post('/messages', createMessage);
// chatrouter.get('/messages/:conversationId', getAllMessages);
// chatrouter.put('/messages/:id', updateMessage);
// chatrouter.delete('/messages/:id', deleteMessage);

// module.exports = chatrouter;



const express = require('express');
const router = express.Router();
const {
    sendMessage,
    getAllConversationsForUser,
    getAllMessagesBetweenUsers,
    findconversation
} = require('../controller/chat');

// Route to get all messages between 2 users
router.get('/messages/:userId1/:userId2/:conversationId', getAllMessagesBetweenUsers);

// Route to get all conversations for a specific user
router.get('/:userId/conversations', getAllConversationsForUser);
router.get('/:user1/:user2', findconversation);
// Route to send a message
router.post('/messages/send', sendMessage);

module.exports = router;



