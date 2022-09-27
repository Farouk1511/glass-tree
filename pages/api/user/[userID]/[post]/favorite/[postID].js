import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import connectDB from "../../../../../../middleware/connectDB";
import User from "../../../../../../models/user";

//https://stackoverflow.com/questions/36367655/saving-hashmap-to-mongoose
const handler = async (req, res) => {
  try {
    if (req.method !== "PUT") return;

    const { userID, post, postID } = req.query;

    const user = await User.findOne({uid:userID}).select("-image");

    if (post === "job") {
        console.log(user)
      user.favoriteJob.set(ObjectId(postID), Boolean(true));
    }

    if (post === "service") {
      user.favoriteService.set(ObjectId(postID), Boolean(true));
    }

    user.updated = Date.now();

   const result =  await user.save();

    res.json({result})
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

export default connectDB(handler);
