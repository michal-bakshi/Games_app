import gameSchema from "../schema/gameSchema.js"
export default{
  getAll:(req,res)=>{
        gameSchema.find().populate('code_Category')
        .then((list)=>{res.status(200).send(list)})
        .catch((error)=>{res.status(400).send(error.message)})
      },
  getById:(req,res)=>{
     gameSchema.findById(req.params.id).populate('code_Category')
     .then((g)=>res.status(200).send(g))
     .catch((error)=> res.status(400).send(error.message))
  },
  getByCategory: (req, res) => {
    gameSchema.find({code_Category:req.params.cid})
    .then((g)=>res.status(200).send(g))
    .catch((error)=> res.status(400).send(error.message))
  },

  getByNameAndPass:(req,res)=>{
    gameSchema.findOne({name:req.params.name,price:req.params.price})
    .then((x)=>{
        if(x)
            res.status(200).send(x)
        else
          res.status(200).send("not found")
    })
    .catch((err)=>{
        res.status(400).send(err.message)
    })
 },
  add:(req,res)=>{
      const newGame=new gameSchema(req.body)
      newGame.save()
      .then((x)=>{res.status(200).send(x)})
      .catch((err)=>{res.status(400).send(err.message)})
     },
     delete:(req,res)=>{
      gameSchema.findByIdAndDelete(req.params.id)
         .then(()=>{res.status(200).send(true)})
         .catch(()=>{res.status(400).send(false)})
     },
     update:(req,res)=>{
      console.log("update now")
        gameSchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
        .then((game)=>{res.status(200).send(game)})
        .catch((err)=>{res.status(400).send(err.message);console.log(err.message)})
     }
    


}