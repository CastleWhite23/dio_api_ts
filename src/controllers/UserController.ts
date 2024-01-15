import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

export class UserController {
    userService: UserService

    constructor(
        userService = new UserService()
    ){
        this.userService = userService
    }

    createUser = (request: Request, response: Response): Response => {
        const user = request.body

        if(!user.name){
            return response.status(400).json({ message: 'Bad request! Name obrigatório'})
        }

        if(!user.email){
            return response.status(400).json({ message: 'Bad request! Email obrigatório'})
        }

        if(!user.password){
            return response.status(400).json({ message: 'Bad request! Senha obrigatória'})
        }


        this.userService.createUser(user.name, user.email, user.password)
        return response.status(201).json({ message: 'Usuário criado'})
    }

    getUser = (request: Request, response: Response) => {
        return response.status(200)
    } 

    delete = (request: Request, response: Response) => {
        return response.status(200).json({message: 'Usuário deletado'})
    }
}
