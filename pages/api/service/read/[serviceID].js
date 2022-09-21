import connectDB from "../../../../middleware/connectDB"
import Service from "../../../../models/service"
import connectMongo from "../../../../utils/connectMongo"
const handler = async (req,res) => {

    try{
        // console.log('Connecting to DB')
        // await connectMongo()
        // console.log('Connected to DB')

        const { serviceID} = req.query


        if(!serviceID) return

        const service = await Service.findById(serviceID)

        return await res.json({message:'Success',service})


    }catch(err){
        console.log(err)
    }
}

export default connectDB(handler);