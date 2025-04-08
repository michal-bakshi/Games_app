import userScheme from '../schema/UserSchema.js'
export default{
    add:(req,res)=>{
      console.log("in add function",req.body)
        const newUser=new userScheme(req.body)
        newUser.save()
        .then((x)=>{res.status(200).send(x)})
        .catch((error)=>{res.status(400).send(error.message)})
    },
    login: (req, res) => {
        const { name, password } = req.body;
        console.log(name," ",password)
        userScheme.findOne({ name })
          .then((existingUser) => {
            if (!existingUser) 
              res.status(400).send('אינך קיים במערכת'); 
            const passVerification = password === existingUser.password;
            if (!passVerification) 
              res.status(400).send('סיסמא שגויה' );
            res.status(200).send(existingUser);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send(err.message);
          });
      }     
}
