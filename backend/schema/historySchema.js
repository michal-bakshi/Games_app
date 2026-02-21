import mongoose, { Schema ,model} from 'mongoose';

const history =  Schema({
    codeClent:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    dateBuy:{
        type:Date,
        default:new Date()
    },
    arr_game:Array   
})
export default model('history',history)
//mongoDB histories