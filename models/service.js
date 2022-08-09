import { Schema,model, models} from "mongoose";

const ServiceSchema = new Schema({
    title:{
        type:String,
        require:"Services title is required",
        trim:true
    },
    images:[{
        type:String,
       
        
    }],
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
})

const Service = models.Service || model("Service",ServiceSchema)

export default Service