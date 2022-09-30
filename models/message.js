import { model, models, Schema } from "mongoose";

const messageSchema = new Schema({
  sender: Schema.Types.ObjectId,
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  conversationId: {
    type: Schema.Types.ObjectId,
  },
  seen:{
    type:Boolean,
    default:false
  }
});

const Message = models.Message || model('Message',messageSchema)

export default Message