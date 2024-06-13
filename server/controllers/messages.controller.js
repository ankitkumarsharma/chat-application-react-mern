import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const receiverId = req.params.id;
        const senderId = req.user._id;
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage);
        }
        // await conversation.save();
        // await newMessage.save();
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error from sendMessage controller: ", error);
        res.status(500).json({ error: "Internal Server Error!" });
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: userWithChatId } = req.params
        // const userWithChatId = req.params.id; // we can use anyone of the same
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userWithChatId] }
        }).populate('messages');

        if (!conversation) res.status(200).json([]);
        if (conversation) {
            const message = conversation.messages
            res.status(201).json(message);
        } 

    } catch (error) {
        console.log("Error from getMessage controller: ", error);
        res.status(500).json({ error: "Internal Server Error!" });
    }
}