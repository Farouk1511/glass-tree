import { firebaseAdmin } from "../../../../../firbase/firebaseAdmin";
import connectDB from "../../../../../middleware/connectDB";
import Job from "../../../../../models/job";

const handler = async (req, res) => {
  try {
    // console.log("Connecting to DB");
    // await connectMongo();
    // console.log("Connected to DB");

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

    if (!jobID) return res.json({error:'No Job ID'});

    let job = await Job.findById(jobID);

    const result = await job.delete();

    return await res.json({ result, message: "Job posting has been deleted" });
  } catch (err) {
    res.josn({ error: err.message });
  }
};

export default connectDB(handler);
