import Job from "../../../../models/job";
import connectMongo from "../../../../utils/connectMongo";
import User from "../../../../models/user";
import connectDB from "../../../../middleware/connectDB";

/**
 * Creates job posting
 * @param {} req
 * @param {*} res
 * @returns
 */
const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      create(req, res);
      break;

    case "GET":
      listJobsbyUser(req, res);
      break;

    default:
      create(req, res);
  }

  // if(req.method === 'POST'){
  //    create(req,res)
  // }
};

const create = async (req, res) => {
  try {
    // console.log("connecting to DB....");
    // await connectMongo();
    // console.log("connected to DB");

    const { userID } = req.query;

    if (!userID) return;

    const user = await User.findOne({ uid: userID });

    const job = new Job(req.body);
    job.user = user;

    if (req.body.image) {
      job.image.data = req.body.image.data_url;
      job.image.contentType = "image/png";
    }
    const result = await job.save();

    res.json(result);
    res.status(200).end();
  } catch (err) {
    console.log(err);
    res.json(err);
    res.status(405).end();
  }
};

const listJobsbyUser = async (req, res) => {
  try {
    // console.log("connecting to DB....");
    // await connectMongo();
    // console.log("connected to DB");

    const { userID } = req.query;

    if (!userID) return;

    const user = await User.findOne({ uid: userID });

    const user_objID = user._id;

    const jobs = await Job.find({ user: user_objID })
      .select("-image")
      .populate({ path: "user", model: User, select: "-image" });

    res.json(jobs);
    res.status(200).end();
  } catch (err) {
    console.log(err);
    res.json(err);
    res.status(405).end();
  }
};
export default connectDB(handler);
