import {Router} from 'express'
import categoryController from "../controllers/categoryController.js";
import bodyParser from "body-parser";
const cr=Router()
cr.use(bodyParser.json())
cr.get('/getAll',categoryController.getAll)
cr.get('/getById/:id',categoryController.getById)
cr.post('/add',categoryController.add)
cr.put('/update/:id',categoryController.update)
cr.delete('/delete/:id',categoryController.delete)

export default cr