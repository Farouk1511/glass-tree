import { extend } from "lodash";
import User from "../../../../models/user";

const handler = async (req, res) => {
  try {
    const { userID } = req.query;

    let user = await User.findOne({ uid: userID });
    user = extend(user, req.body);
    user.updated = Date.now()

    let result = await user.save();

    return res.json({ result });
  } catch (err) {
    console.log(err);
    res.json(err.message);
  }
};

export default handler;
