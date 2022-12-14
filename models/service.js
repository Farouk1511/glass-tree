import { Schema,model, models} from "mongoose";
import Comment from "./comment";


const ServiceSchema = new Schema({
    title:{
        type:String,
        require:"Services title is required",
        trim:true
    },
    images:[{
        type:String,
       
        
    }],
    image:{
        data:Buffer,
        contentType:String
    },
    description:{
        type:String,
        required:"A description is required",
        trim:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"

    },
    created:{
        type:Date,
        default:Date.now
    },
    updated:Date,
    ratePerHour:{
        type:Number,
        required:"Rate is required"
    },
    comments:[Comment.schema]
    
})

const Service = models.Service || model("Service",ServiceSchema)

export default Service 