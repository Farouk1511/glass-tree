import connectDB from "../../../../../../middleware/connectDB";
import User from "../../../../../../models/user";
import Job from "../../../../../../models/job";
import Service from "../../../../../../models/service";
import {firebaseAdmin} from '../../../../../../firbase/firebaseAdmin'

//https://stackoverflow.com/questions/55878704/mongo-db-design-for-user-favourites-pros-and-cons




// admin.initializeApp({
//   credential:admin.credential.cert(serviceAccount)
// })


const handler = async (req, res) => {
  try {
    if (req.method !== "GET") return;

    const { userID, post } = req.query;

    const authorization = req.headers.authorization
    const token = authorization.split(' ')[1]
    // console.log(token)

    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token)
   

   const {uid} = decodedToken

   if(uid !== userID){
    return res.json({err:'Not Authorized'})
   }
   
    

    let result;
    if (post === "job") {
      result = await User.findOne(
        { uid: userID },
        { favoriteJob: true }
      ).select("-image");
      const { favoriteJob } = result;
      // console.log(result);
      let favIDs = Array.from(result.favoriteJob.keys());
      const favJobs = favIDs.filter((id) => favoriteJob.get(id));

      const favoriteJobs = await Job.find({ _id: { $in: favJobs } })
        .select("-image")
        .populate({ path: "user", model: User, select: "-image" });

      result = favoriteJobs;
    }

    if (post === "service") {
      result = await User.findOne(
        { uid: userID },
        { favoriteService: true }
      ).select("-image");
      const { favoriteService } = result;
      // console.log(result);
      const favIDs = Array.from(result.favoriteService.keys());

      const favServices = favIDs.filter((id) => favoriteService.get(id));
      //   console.log(favIDs)
      const favoriteServices = await Service.find({
        _id: { $in: favServices },
      })
        .select("-image")
        .populate({ path: "user", model: User, select: "-image" });

      result = favoriteServices;
    }

    res.json(result);
  } catch (err) {
    console.log(err);
    return res.json({ err:'Please sign in' });
  }
};

export default connectDB(handler);
