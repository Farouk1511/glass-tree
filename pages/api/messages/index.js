import { ObjectId } from "mongodb";
import connectDB from "../../../middleware/connectDB";
import Conversation from "../../../models/conversation";
import Message from "../../../models/message";
import User from "../../../models/user";

const handler = async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not Allowed" });

  const { senderUID, recieverUID, conversationId, content } = req.body;

  let conversation;
  let message;

  const senderId = await User.findOne({uid:senderUID}).select('_id')
  const recieverId = await User.findOne({uid:recieverUID}).select('_id')

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
    })

    message = await message.populate({path:'sender',model:User,select:'id uid name email'})
    

   return res.json({ message });
  }

  
//conversation id given
  message = await Message.create({
    sender: senderId,
    content,
    conversationId,
  });

  message = await message.populate({path:'sender',model:User,select:'id uid name email'})

  return res.json({ message });
};

export default connectDB(handler);
