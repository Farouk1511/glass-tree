
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

        console.log(service.image.contentType)
        
        if(service.image.data){
            res.set('Content-Type',service.image.contentType)
            return res.send(service.image.data)
        }

       


    }catch(err){
        res.json({err})
    }
}

export default handler