
import User from "../../../../models/user";

const handler = async (req, res) => {
  try {
    const { userID } = req.query;

    const user = await User.findOne({ uid: userID }).select('-image');
    

    return res.json({ user });
  } catch (err) {
    console.log(err);
    res.json(err.message);
  }
};

export default handler;
