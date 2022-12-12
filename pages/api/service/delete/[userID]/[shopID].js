import connectDB from "../../../../../middleware/connectDB";
import Service from "../../../../../models/service";
import { firebaseAdmin } from "../../../../../firbase/firebaseAdmin";
const handler = async (req, res) => {
  try {
    // console.log("Connecting to DB");
    // await connectMongo();
    // console.log("Succesfully connected DB");

    const { shopID, userID } = req.query;
    if (!shopID || !userID) return;

    const authToken = req.headers.authorization;
    if (!authToken) {
      return res.json({ error: "No Auth Token" });
    }
    const token = authToken.split(" ")[1];
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);

    const { uid } = decodedToken;

    if (uid !== userID) {
      return res.json({ error: "Not Authorized" });
    }

    const service = await Service.findByIdAndDelete(shopID);
    await res.json({ service, message: "service deleted" });
  } catch (err) {
    res.json({ error: err.message });
  }
};
export default connectDB(handler);
