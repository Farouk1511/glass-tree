import mongoose from "mongoose";



const connectDB = handler => async(req,res) => {
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }

    console.log('Connecting to db....')
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to DB')
    return handler(req,res)
}

export default connectDB