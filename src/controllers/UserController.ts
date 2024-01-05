import { Request, Response } from "express"
import { UserService } from "../services/UserService"

export class UserController {
    //definindo propriedade
    userService: UserService //propiedade da classe UserController que é do tipo UserService (toda classe é uma interface)

    //contruinda a propriedade
    constructor(
        userService = new UserService() //se nao tiver parametro de entrada esse é o valor padrao
    ){
        this.userService = userService // instanciado propriedade
    }


    createUser = (request: Request, response: Response) => {
        const userData = request.body

        if(!userData.name){
            return response.status(400).json({ message: "Bad Request! Nome é obrigatório"})
        }

        this.userService.createUser(userData.name, userData.email)

        return response.status(201).json({ message: "Registro criado" })
    }

    getAllUsers = (request: Request, response: Response) => {
    
       const Users =  this.userService.getAllUsers()
        return response.status(200).json(Users)
    }

    delete = (request: Request, response: Response)=>{
        response.status(200).json({message: 'usuario deletado'})
    }
}