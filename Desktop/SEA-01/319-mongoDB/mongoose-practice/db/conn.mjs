// import {MongoClient} from 'Mongodb'
// import dotenv from 'dotenv'

// dotenv.config()

// const mongoUrl=process.env.ATLAS_URL;

// const client=new MongoClient(mongoUrl)

// let conn;
// try {
//     conn=await client.connect()
    
// } catch (error) {
//     console.log(error)
// }

import mongoose from 'mongoose'

module.exports=function connectDb(){
    mongoose.connect(process.env.ATLAS_URL);
    
    const db=mongoose.connection;
    db.on('error',console.log(error))
    db.on('open',console.log('connected to mongoose'))
    db.on('close',()=>console.log('mongodb disconnected'))
}