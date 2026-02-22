import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import cr from './route/CategoryRoute.js'
import gr from './route/GameRouter.js'
import ur from './route/UserRoute.js'
import hr from './route/historyRoute.js'
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 9090,()=>{
    console.log("server run")
})

mongoose.connect(process.env.MONGO_URI)
   .then(()=>{
       console.log("connect to mongodb")
   })
   .catch((error)=>{
       console.log(error.message)
   })

app.use('/category',cr)
app.use('/game',gr)
app.use('/user',ur)
app.use('/history',hr)

app.use(express.static('pic'))
