import { Request, Response } from "express"
import { UserService } from "../services/UserService"

const userService =  new UserService()

export class UserController {
    createUser = (request: Request, response: Response) => {
        const userData = request.body

        if(!userData.name){
            return response.status(400).json({ message: "Bad Request! Nome é obrigatório"})
        }

        userService.createUser(userData.name, userData.email)

        return response.status(201).json({ message: "Registro criado" })
    }
}