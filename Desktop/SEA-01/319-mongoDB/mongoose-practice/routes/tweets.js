import express from "express";
import Tweet from '../models/tweet.js';
import user from "../models/user.js";
 const router=express.Router();

 router.post('/',async (req,res)=>{
    const dbUser=await user.find({username})
    if(dbUser){
        const tweet=await Tweet.create({
            body:newTweet,
            user:dbUser._id
        })
        return res.json(tweet)
    }else{
            const newUser=await user.create({username})
            const tweet=Tweet.create({body:newTweet,user:newUser._id})
            return res.json(tweet)
        }
 })
 export default router;