import connectDB from "../../../../middleware/connectDB";
import Service from "../../../../models/service";

const handler = async (req, res) => {
  try {
    // console.log("Connecting to DB");
    // await connectMongo();
    // console.log("Succesfully connected DB");

    const { shopID } = req.query;

    if (!shopID) return;

    const service = await Service.findByIdAndDelete(shopID);
    await res.json({ service, message: "service deleted" });
  } catch (err) {
    res.json(err);
  }
};
export default connectDB(handler);
