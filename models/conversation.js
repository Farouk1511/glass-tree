import {Schema,model,models} from 'mongoose'

//https://stackoverflow.com/questions/30823944/mongodb-best-design-for-messaging-app
const conversationSchema = new Schema({
   sender:Schema.Types.ObjectId,
   reciever:Schema.Types.ObjectId, 
})

const Conversation = models.Conversation || model('Conversation',conversationSchema)

export default Conversation