import mongoose, { Schema } from 'mongoose';

const user =  Schema({
    name:String,
    password:String,
    number: {
      type: String,
      required: true,
    },
    expirationDate: {
      type: String,
      required: true,
    },
    cvv: {
      type: String,
      required: true,
    }
      
})
export default mongoose.model('user',user)