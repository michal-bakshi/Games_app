import mongoose, { Schema } from 'mongoose';

const game =  Schema({
    name:String,
    price:Number,
    code_Category:{
        type:mongoose.Types.ObjectId,
        ref:'categories'
    },
    pic:String,
    amount:Number
})
export default mongoose.model('game',game)

