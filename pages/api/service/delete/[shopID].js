import { extend } from "lodash";
import Service from "../../../../models/service";
import connectMongo from "../../../../utils/connectMongo";

const handler = async (req, res) => {
  try {
    console.log("Connecting to DB");
    await connectMongo();
    console.log("Succesfully connected DB");

    const { shopID } = req.query;

    if (!shopID) return;

    const service = await Service.findByIdAndDelete(shopID);
    res.json({ service, message: "service deleted" });
  } catch (err) {
    res.json(err);
  }
};
export default handler;
