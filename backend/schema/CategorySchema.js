import  {model,Schema} from 'mongoose'
const Category=Schema({
    name:{
        type:String,
        require:true
    }

})
export default model('categories',Category)