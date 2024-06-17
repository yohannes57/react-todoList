import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import routerTweet from './routes/tweets.js';


dotenv.config();
try {
    mongoose.connect(process.env.ATLAS_URL);
    console.log('db connected')
} catch (error) {
    console.log(error);
}


const app=express();
const PORT=process.env.PORT||3000;

app.use(express.json());


app.use('/tweet',routerTweet)


app.get('/',(req,res)=>{
    res.send("conn")
})

app.listen(PORT,()=>{
    console.log("server running at port :3000")
})