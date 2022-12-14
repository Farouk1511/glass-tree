import {Schema,model,models} from 'mongoose'

// https://stackoverflow.com/questions/55878704/mongo-db-design-for-user-favourites-pros-and-cons
// 

const UserSchema = new Schema({
    uid:{
        type:String,
        required:'Firebase authuid is required'
    },
    name:{
        type:String,
        trim:true,
        required:'Name is required'
    },
    email:{
        type:String,
        require:'Email is required',
        unique:'Email already exists',
        trim:true,
        match:[/.+\@.+\..+/,'Please fill a valid email address']
    },
    created:{
        type:Date,
        default:Date.now
    },
    updated:Date,
    username:{
        type:String,
        trim:true,
        required:'Username is required',
        unique:true
    },
    totalRatings:{
        type:Number,
        default:0
    },
    averageRating:{
        type:Number,
        default:3
    },
    ratingPerHour:{
        type: Number
    },
    image:{
        data:Buffer,
        contentType:String,
        // default:0
    },
    favoriteJob:{
        type:Map,
        of:Boolean,
        default:{}
    },
    favoriteService:{
        type:Map,
        of:Boolean,
        default:{}
    }
   
})

const User = models.User || model('User',UserSchema)

export default User

/**To do
 * add  rating
 * add total number od reviews  
 */