import express from 'express'
import mongoose from 'mongoose'
import cr from './route/CategoryRoute.js'
import gr from './route/GameRouter.js'
import ur from './route/UserRoute.js'
import hr from './route/historyRoute.js'
import cors from 'cors';
const app=express()
app.use(cors());



app.listen("9090",()=>{
    console.log("server run")
})


mongoose.connect('mongodb://0.0.0.0:27017/game_shop')
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
