import Job from "../../../../models/job"
import User from "../../../../models/user"
import connectMongo from "../../../../utils/connectMongo"



const handler = async (req,res) => {

    try{
        console.log('Connecting to Databse')
        await connectMongo()
        console.log('Db is connected')

        const {jobID} = req.query

        if(!jobID) return 

        const job = await Job.findById(jobID).populate({path:'user',model:User})

        if(!job) return res.json({message:"Job Posting does not exist"})

        return await res.json({job,message:"Successful"})
   }catch(err){
        console.log(err)
    }
}

export default handler