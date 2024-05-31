import {Schema,model,models} from 'mongoose'

const UserSchema = new Schema({
    clerkId:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        unique:true
    },
    photo:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
})


const User = models?.user || model("users",UserSchema)

export default User;
