import Service from "../../../../models/service";
import connectMongo from "../../../../utils/connectMongo";


const handler = async (req, res) => {
  try {
    console.log("Connecting to DB");
    await connectMongo();
    console.log("Succesfully connected DB");

    const services = await Service.find({}).populate('user');
    res.json(services);
  } catch (err) {
    res.json(err);
  }
};

export default handler;
