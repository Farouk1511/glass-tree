import Service from "../../../../models/service";
import User from "../../../../models/user";
import connectMongo from "../../../../utils/connectMongo";




const handler = async (req, res) => {
  try {
    console.log("Connecting to DB");
    await connectMongo();
    console.log("Connected to DB");

    console.log("Registering....");
    const { userID } = req.query;
  

    if (!userID) return;

    const user = await User.findOne({ uid: userID });

    if (!req.body) return;

    // console.log(user);

    const service = new Service(req.body);
    service.user = user;
    const result = await service.save();
    return res.json({ result });
  } catch (err) {
    console.log(err);
    res.end(err);
  }
};



export default handler;
