
import connectDB from "../../../../middleware/connectDB";
import User from "../../../../models/user";
const handler = async (req, res) => {
  try {
    // await connectMongo()
    const { userID } = req.query;

    

  
  





    const user = await User.findOne({ uid: userID }).select('-image')
    

    return res.json({ user });
  } catch (err) {
    console.log(err);
    res.json({err:err.message});
  }
};

export default connectDB(handler);
