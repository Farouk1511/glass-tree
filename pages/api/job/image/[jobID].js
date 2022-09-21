import connectDB from "../../../../middleware/connectDB";
import Job from "../../../../models/job";
import connectMongo from "../../../../utils/connectMongo";

const handler = async (req, res) => {
  try {
    // console.log("Connecting to DB");
    // await connectMongo();
    // console.log("Succesfully connected DB");

    const { jobID } = req.query;

    if (!jobID) return;

    let job = await Job.findById(jobID);

    // console.log(job.image.data)
    //  https://stackoverflow.com/questions/67457513/rendering-image-from-api-response-in-nextjs-just-downloads-base64-file
    if (job.image.data) {
      const decoded = job.image.data
        .toString()
        .replace("data:image/png;base64,", "")
        .replace("data:image/jpeg;base64,", "")
      const imageResp = Buffer.from(decoded, "base64");

      res.writeHead(200, {
        "Content-Type": "image/png",
        "Content-Length": imageResp.length,
      });
      res.end(imageResp);
    }
  } catch (err) {
    // console.log(err);
    res.json({ err });
  }
};

export default connectDB(handler);
