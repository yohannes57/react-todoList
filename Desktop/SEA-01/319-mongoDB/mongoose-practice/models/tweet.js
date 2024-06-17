import mongoose from "mongoose";
const commentSchema=new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:userId,
    },
    title:{
        type:String,
        required:true,
        minLength:1,
        maxLength:50
    },
    body:{
        type:String,
        required:true,
        minLength:1,
        maxLength:270
    },
    author:{
        type:String,
        required:true
    },
    likes:{
        type:Number,
        default:0,
    }
},{timestamps:true})

const Tweet =mongoose.model('Tweet',commentSchema)
export default Tweet;