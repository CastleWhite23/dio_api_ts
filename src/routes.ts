import { Router } from 'express' //func do express para as rotas
import { UserController } from './controllers/UserController';


export const router = Router();

const userController = new UserController()


router.post("/user", userController.createUser) //aqui não precisa do req e do res pq os parametros do create user sao req e res
router.get("/user", userController.getAllUsers)
router.delete("/user", userController.delete)