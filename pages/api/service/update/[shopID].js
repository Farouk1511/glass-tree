import { extend } from "lodash"
import Service from "../../../../models/service"
import connectDB from "../../../../middleware/connectDB"
const handler = async(req,res) => {

    try{
        // console.log("Connecting to DB")
        // await connectMongo()
        // console.log("Succesfully connected DB")

        const {shopID} = req.query

        if(!shopID) return

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