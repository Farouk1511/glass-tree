import Conversation from "../../../models/conversation";
import User from "../../../models/user";
import connectDB from "../../../middleware/connectDB";
import Message from "../../../models/message";

// https://stackoverflow.com/questions/44320359/async-findone-operation-inside-foreach-loop

const handler = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not Allowed" });
  }

  const { uid } = req.query;

  //userID id uid

  const user = await User.findOne({ uid }).select("_id");

  const userID = user._id;

  //   console.log(userID);

  const conversations = await Conversation.find({
    $or: [{ sender: userID }, { reciever: userID }],
  });
  //  const conversations = await Conversation.find({})

  //   console.log(conversations);

  // await Message.create({
  //     conversationId:ObjectId('6335e4a3b7149666a8b461ef'),
  //     sender:ObjectId('631e97e9d587f83f24ca5c78'),
  //     content:'Hello Dubem'
  // })

  let aggregatedConversation = await Promise.all(
    conversations.map(async (convo) => {
      const conversationId = convo._id;

      let otherUser
      console.log(userID,convo.sender)
      if(userID.toString() === convo.sender.toString()){
        otherUser = await User.findById(convo.reciever).select('uid _id name')
      }else{
        otherUser = await User.findById(convo.sender).select('uid _id name')
      }

      const messages = await Message.find({ conversationId }).populate({
        path: "sender",
        model: User,
        select: "name _id uid",
      });
      return { conversationId, messages,otherUser };
    })
  );

  //   const messages = await Message.find({ conversationId: conversations });

 return  res.json(aggregatedConversation);

  //   console.log(aggregatedConversation);
};

export default connectDB(handler);
