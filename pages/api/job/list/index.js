import Job from "../../../../models/job"
import User from "../../../../models/user"
import connectMongo from "../../../../utils/connectMongo"

const handler = async (req,res) => {
    try{
        console.log("Connecting to Database.... ")
        await connectMongo()
        console.log("Connected to DB")

        const jobs = await Job.find({}).select('-image').populate({path:'user',model:User})

        return await res.json({message:'Successful',jobs})
    }catch(err){
        console.log(err)
    }
}

export default handler