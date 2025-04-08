import CategorySchema from "../schema/CategorySchema.js"

export default{
    getAll:(req,res)=>{
        CategorySchema.find()
        .then((list)=>{
           res.status(200).send(list)
        })
        .catch((err)=>{
            res.status(400).send(err.message)
        })
    },
    getById:(req,res)=>{
        CategorySchema.findById(req.params.id)
      .then((element)=>{res.status.send(element)})
      .catch((error)=>{res.status(400).send(error.message)})
    },
   add:(req,res)=>{
    const newCat=new CategorySchema(req.body)
    newCat.save()
    .then((x)=>{
       res.status(200).send(x)
       console.log("add"+x)
    })
    .catch((err)=>{
        res.status(400).send(err.message)
    })

   },
   update:(req,res)=>{
    CategorySchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((Cat)=>{res.status(200).send(Cat)})
    .catch((err)=>{res.status(400).send(err.message)})
   },
   delete:(req,res)=>{
    CategorySchema.findByIdAndDelete(req.params.id)
    .then(()=>{res.status(200).send("ok")})
    .catch((x)=>{res.status(400).send(x.message);console.log(x.message)})
   }

}