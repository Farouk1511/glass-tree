import { extend } from "lodash";
import connectDB from "../../../../middleware/connectDB";
import User from "../../../../models/user";
import connectMongo from "../../../../utils/connectMongo";

const handler = async (req, res) => {
  try {
    // await connectMongo();
    const { userID } = req.query;

    // console.log(typeof req.body);
    // let user = await User.updateOne({ uid: userID },{$set:{...req.body}});
    let user = await User.findOne({ uid: userID });

    // console.log(req.body)
    // console.log(user)

    user = extend(user, req.body);
    if(req.body.image){
      
      user.image.data = req.body.image.data_url;
      user.image.contentType = "image/png";
    }
    user.updated = Date.now();
    
    // console.log(user);

    await user.save();

    return res.json({ user });
  } catch (err) {
    console.log(err);
    res.json(err.message);
  }
};

export default connectDB(handler);
