import Job from "../../../../models/job";
import connectMongo from "../../../../utils/connectMongo";

const handler = async (req, res) => {
  try {
    console.log("Connecting to DB");
    await connectMongo();
    console.log("Connected to DB");

    const { jobID } = req.query;

    if (!jobID) return;

    let job = await Job.findById(jobID);

    const result = await job.delete();

    return await res.json({ result, message: "Job posting has been deleted" });
  } catch (err) {
    console.log(err)
  }
};

export default handler;
