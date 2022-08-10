import { extend } from "lodash"
import Service from "../../../../models/service"
import connectMongo from "../../../../utils/connectMongo"

const handler = async(req,res) => {

    try{
        console.log("Connecting to DB")
        await connectMongo()
        console.log("Succesfully connected DB")

        const {shopID} = req.query

        if(!shopID) return

        let service = await Service.findById(shopID)
        service = extend(service,req.body)

        let result = await service.save()
        res.json(result)


    }catch(err){
        res.json({err})
    }
}

export default handler