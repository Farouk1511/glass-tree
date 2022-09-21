
import auth from "../../../../lib/firebase";
import connectDB from "../../../../middleware/connectDB";
import Service from "../../../../models/service";
import User from "../../../../models/user";

//https://rishi.app/blog/using-firebase-admin-with-next-js

const handler = async (req, res) => {
  try {
    const { userID } = req.query;

    //Delete user from Auth Servcice (FireBase)
    await auth.deleteUser(userID);
    //Delete user from DB
    let user = await User.findOneAndDelete({ uid: userID });

    //Delete all Postings by User
    const user_objID = user._id;
    // console.log(user_objID);

    const services = await Service.findAndDelete({ user: user_objID });
    res.json({ message: "Succesful", user,services });
  } catch (err) {
    console.log(err)
    res.json({ message: "Error" });
  }
};

export default connectDB(handler);
