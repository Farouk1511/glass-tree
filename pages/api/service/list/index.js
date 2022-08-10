import { find } from "lodash"
import Service from "../../../../models/service"

const handler = async (req,res) => {

    try{
        const services = await Service.find()
        res.json(services)

    }catch(err){
        res.json(err)
    }
}

export default handler