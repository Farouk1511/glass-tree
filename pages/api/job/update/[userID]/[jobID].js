import { extend } from "lodash";
import { firebaseAdmin } from "../../../../../firbase/firebaseAdmin";
import connectDB from "../../../../../middleware/connectDB";
import Job from "../../../../../models/job";

const handler = async (req, res) => {
  try {
    // console.log('Connecting to DB')
    // await connectMongo()
    // console.log("Connected to DB")

    const { jobID, userID } = req.query;
    const authToken = req.headers.authorization;
    if (!authToken) {
      return res.json({ error: "No Auth Token" });
    }
    const token = authToken.split(" ")[1];
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);

    const { uid } = decodedToken;

    if (uid !== userID) {
      return res.json({ error: "Not Authorized" });
    }

    if (!jobID) return res.json({ error: "No Job ID" });

    let job = await Job.findById(jobID);
    // console.log(req.body)
    job = extend(job, req.body);

    if (req.body.image) {
      job.image.data = req.body.image.data_url;
      job.image.contentType = req.body.image.file.type;
    }
    job.updated = Date.now();

    const result = await job.save();

    res.json(result);
  } catch (err) {
    console.log(err);
    res.json({ error: err.message });
  }
};

export default connectDB(handler);
