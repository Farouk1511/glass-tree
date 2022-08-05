import {Schema,model,models} from 'mongoose'

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
    }
})

const User = models.User || model('User',UserSchema)

export default User