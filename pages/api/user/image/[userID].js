import User from "../../../../models/user";
import connectMongo from "../../../../utils/connectMongo";

const handler = async (req, res) => {
  try {
    console.log("Connecting to DB");
    await connectMongo();
    console.log("Succesfully connected DB");

    const { userID } = req.query;

    if (!userID) return;

    let user = await User.findById(userID);

    // console.log(user.image.data)
    //  https://stackoverflow.com/questions/67457513/rendering-image-from-api-response-in-nextjs-just-downloads-base64-file
    if (user.image.data) {
      const decoded = user.image.data
        .toString()
        .replace("data:image/png;base64,", "")
        .replace("data:image/jpeg;base64,", "");
      const imageResp = Buffer.from(decoded, "base64");

      res.writeHead(200, {
        "Content-Type": "image/png",
        "Content-Length": imageResp.length,
      });
      res.end(imageResp);
    }
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

export default handler;
