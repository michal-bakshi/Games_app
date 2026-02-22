import historySchema from "../schema/historySchema.js";
export default{
    add:(req,res)=>{
        const newHis = new historySchema({
            codeClent: req.body.codeClent,  
            dateBuy: new Date() ,            
            arr_game: req.body.arr_game    
        });
        newHis.save()
        .then((x)=>{res.status(200).send(x)})
        .catch((err)=>{res.status(400).send(err.message)})
        
    },
    getAll: (req, res) => {
        const id =req.params.id
      
        historySchema.find({codeClent:id})
        .then((element)=>{res.status(200).send(element)})
      .catch((error)=>{res.status(400).send(error.message)})

    }
}