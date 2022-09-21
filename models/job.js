import {models,model,Schema} from 'mongoose'

const jobSchema = new Schema({
    title:{
        type:String,
        required:"Title of the job is required",
        trim:true
    },
    description:{
        type:String,
        required:"Description of the job is required",
        trim:true

    },
    pay:{
        type:String,
        required:"Pay is required"
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    created:{
        type:Date,
        default:Date.now
    },
    updated:Date,
    image:{
        data:Buffer,
        contentType:String
    },
})

const Job = models.Job || model("Job",jobSchema)

export default Job 