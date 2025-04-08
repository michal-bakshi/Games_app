import { Router } from "express";
import gameController from "../controllers/gameController.js";
import bodyParser from "body-parser";
const gr=Router()
gr.use(bodyParser.json())
gr.get('/getById/:id',gameController.getById)
gr.get('/getByCaterory/:cid',gameController.getByCaterory)
gr.get('/getAll',gameController.getAll)
gr.post('/add',gameController.add)
gr.delete('/delete/:id',gameController.delete)
gr.put('/update/:id',gameController.update)
gr.get('/getByNameAndPass/:name/:price',gameController.getByNameAndPass)
export default gr