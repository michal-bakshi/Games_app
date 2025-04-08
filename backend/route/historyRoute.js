import { Router } from "express";
import historyController from '../controllers/historyController.js'
import bodyParser from "body-parser";
const hr=Router()
hr.use(bodyParser.json())
hr.post('/add',historyController.add)
hr.get('/getAll/:id',historyController.gellAll)
export default hr