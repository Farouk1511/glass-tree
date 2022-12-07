import connectDB from "../../../../middleware/connectDB";
import Service from "../../../../models/service";
import connectMongo from "../../../../utils/connectMongo";

const handler = async (req, res) => {
  try {
    // console.log("Connecting to DB");
    // await connectMongo();
    // console.log("Succesfully connected DB");

    const { shopID } = req.query;

    if (!shopID) return;

    let service = await Service.findById(shopID);

    // console.log(service.image.data)
    //  https://stackoverflow.com/questions/67457513/rendering-image-from-api-response-in-nextjs-just-downloads-base64-file
    if (service.image.data) {
      const decoded = service.image.data
        .toString()
        .replace("data:image/png;base64,", "")
        .replace("data:image/jpeg;base64,", "")
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

export default connectDB(handler);
