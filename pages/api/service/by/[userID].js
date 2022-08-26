import Service from "../../../../models/service";
import User from "../../../../models/user";
import connectMongo from "../../../../utils/connectMongo";

const handler = async (req, res) => {
  await connectMongo();
  switch (req.method) {
    case "POST":
      create(req, res);
      break;
    case "GET":
      getServiceby(req, res);
      break;

    default:
      create(req, res);
      break;
  }
};

const create = async (req, res) => {
  try {
    console.log("Connecting to DB");
    
    console.log("Connected to DB");

    console.log("Registering....");
    const { userID } = req.query;

    if (!userID) return;

    const user = await User.findOne({ uid: userID });

    if (!req.body) return;

    // console.log(user);

    const service = new Service(req.body);
    service.user = user;

    if (req.body.image) {
      service.image.data = req.body.image.data_url;
      service.image.contentType = "image/png";
    }

    const result = await service.save();
    return res.json({ result });
  } catch (err) {
    console.log(err);
    res.end(err);
  }
};

const getServiceby = async (req, res) => {
  try {
    

    const { userID } = req.query;
    if (!userID) return;
    console.log(userID)

    const user = await User.findOne({ uid: userID });
    console.log(user)
    const user_objID = user._id;
    console.log(user_objID)

    const services = await Service.find({ user: user_objID }).select('-image').populate({path:'user',model:User});

    // console.log(services)
    return await res.json(services);
  } catch (err) {
    console.log(err);
  }
};

export default handler;
