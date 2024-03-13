const { Op } = require('sequelize');
const  {
    User,
    Conversation,
    Message
} = require('../db/index');


const sendMessage = async (req, res) => {
    try {
        const { senderId, recipientId, text } = req.body;
        if (!text.trim()) {
            return res.status(400).json({ error: 'Message text cannot be empty' });
        }

        
        let conversation = await Conversation.findOne({
            where: {
                [Op.or]: [
                    {
                        user1Id: senderId,
                        user2Id: recipientId
                    },
                    {
                        user2Id: senderId,
                        user1Id: recipientId
                    }
                ]
            }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                user1Id: senderId,
                user2Id: recipientId,
            });
        }

       
        const message = await Message.create({
            text,
            senderId,
            conversationId: conversation.id,
        });

        return res.status(200).json(message);
    } catch (error) {
        console.error('Error sending message:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


const getAllConversationsForUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

       
        const conversations = await Conversation.findAll({
            where: {
    
                [Op.or]: [{ user1Id: userId }, { user2Id: userId }]
            },
            include: [{ model: User, as: 'user1' }, { model: User, as: 'user2' }] 
        });

    
        return res.status(200).json(conversations);
    } catch (error) {
        console.error('Error getting conversations:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// const getAllMessagesBetweenUsers = async (req, res) => {
//     try {
//         const { userId1, userId2, conversationId } = req.params;

        
//         const conversation = await Conversation.findByPk(conversationId);
//         if (!conversation) {
//             return res.status(404).json({ error: 'Conversation not found' });
//         }

        
//         const user1 = await User.findByPk(userId1);
//         const user2 = await User.findByPk(userId2);
//         if (!user1 || !user2) {
//             console.log(user1, user2);
//             return res.status(404).json({ error: 'User(s) not found' });
//         }

       
//         const messages = await Message.findAll({ 
//             where: { 
//                 conversationId,
//                 senderId: [userId1, userId2]
//             }
//         });

        
//         return res.status(200).json(messages);
//     } catch (error) {
//         console.error('Error getting messages between users in conversation:', error);
//         return res.status(500).json({ error: 'Internal server error' });
//     }
// };

const getAllMessagesBetweenUsers = async (req, res) => {
    try {
        const { userId1, userId2 } = req.params;

        // Find the conversation between the two users
        const conversation = await Conversation.findOne({
            where: {
                user1Id: userId1,
                user2Id: userId2,
            }
        });

        if (!conversation) {
            // Conversation not found
            return res.status(404).json({ error: 'Conversation not found' });
        }

        // Retrieve all messages in the conversation
        const messages = await Message.findAll({
            where: {
                conversationId: conversation.id
            },
            order: [['createdAt', 'ASC']] // Optionally, you can order messages by creation time
        });

        return res.status(200).json(messages);
    } catch (error) {
        console.error('Error fetching messages between users:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const findconversation=  async(req,res)=>{
    try{
        const{user1,user2}=  req.params    
        let conversation = await Conversation.findOne({
            where: {
                [Op.or]: [
                    {
                        user1Id: user1,
                        user2Id: user2
                    },
                    {
                        user2Id: user2,
                        user1Id: user1
                    }
                ]
            }
        });
        return res.status(200).json(conversation);
    }
    catch(error){console.log(error);}
}




module.exports = {
    sendMessage,
    getAllConversationsForUser,
    findconversation,
    getAllMessagesBetweenUsers
};
