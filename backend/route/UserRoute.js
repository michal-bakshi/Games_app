import { Router } from "express";
import userController from "../controllers/userController.js";
import bodyParser from "body-parser";
const ur=Router()

ur.use(bodyParser.json())
ur.post('/add',userController.add)
ur.post('/login',userController.login)


export default ur