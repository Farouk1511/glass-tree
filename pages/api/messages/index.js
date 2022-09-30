import { ObjectId } from "mongodb";
import connectDB from "../../../middleware/connectDB";
import Conversation from "../../../models/conversation";
import Message from "../../../models/message";

const handler = async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not Allowed" });

  const { senderId, recieverId, conversationId, content } = req.body;

  let conversation;
  let message;

  //if no conversation create it then create new message
  if (!conversationId) {
    conversation = await Conversation.create({
      sender: ObjectId(senderId),
      reciever: ObjectId(recieverId),
    });

    //conversation id
    const { _id } = conversation;

    message = await Message.create({
      sender: senderId,
      content,
      conversationId: _id,
    });

   return res.json({ message });
  }

  message = await Message.create({
    sender: senderId,
    content,
    conversationId,
  });

  return res.json({ message });
};

export default connectDB(handler);
