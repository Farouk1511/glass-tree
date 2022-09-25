import { extend } from "lodash";
import connectDB from "../../../../middleware/connectDB";
import Job from "../../../../models/job";

const handler = async (req, res) => {
  try {
    // console.log('Connecting to DB')
    // await connectMongo()
    // console.log("Connected to DB")

    const { jobID } = req.query;

    if (!jobID) return;

    let job = await Job.findById(jobID);
    console.log(req.body.image.file.name)
    job = extend(job, req.body);

    if (req.body.image) {
      job.image.data = req.body.image.data_url;
      job.image.contentType = req.body.image.file.type;
    }
    job.updated = Date.now();

    const result = await job.save();

    return await res.json(result);
  } catch (err) {}
};

export default connectDB(handler);
