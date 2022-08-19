import { extend } from "lodash"
import Job from "../../../../models/job"
import connectMongo from "../../../../utils/connectMongo"

const handler = async (req,res) => {

    try{
        console.log('Connecting to DB')
        await connectMongo()
        console.log("Connected to DB")

        const {jobID} = req.query

        if(!jobID) return 

        let job = await Job.findById(jobID)
        job = extend(job,req.body)
        job.updated = Date.now()

        const result = await job.save()

        return await res.json(result)


    }catch(err){

    }

}

export default handler