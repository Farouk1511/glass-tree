import {Schema,model,models} from 'mongoose'

const CommentSchema = new Schema({
    content: {
        type: String,
        required: true
      },
      timestamp: {
        type: Date,
        default: Date.now
      },
      author: {
        type: String,
        required: true
      }
})

const Comment = models.Comment || model("Comment",CommentSchema)

export default Comment
