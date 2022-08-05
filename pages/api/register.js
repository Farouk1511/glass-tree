import User from '../../models/user'
import connectMongo from './../../utils/connectMongo'

const register = async(req,res) => {
    try{
        console.log('Connecting to DB')
        await connectMongo()
        console.log('Connected to DB')

        console.log('Registering....')
        const user = await User.create(req.body)
        console.log('Registeration complete')

        await res.json({user})
    }catch(err){
        console.log(err)
    }
}

export default register