import { extend } from "lodash"
import Service from "../../../../../models/service"
import connectDB from "../../../../../middleware/connectDB"
import { firebaseAdmin } from "../../../../../firbase/firebaseAdmin"
const handler = async(req,res) => {

    try{
        // console.log("Connecting to DB")
        // await connectMongo()
        // console.log("Succesfully connected DB")

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

        let service = await Service.findById(shopID)
        service = extend(service,req.body)

        if(req.body.image){
      
            service.image.data = req.body.image.data_url;
            service.image.contentType = req.body.image.file.type;
          }
          service.updated = Date.now();
         await service.save()
      
        res.json({Message:"Success"})


    }catch(err){
        res.json({err})
    }
}

export default connectDB(handler);