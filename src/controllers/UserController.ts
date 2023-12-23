import { Request, Response } from "express"



const db = [
    {
        name: "Pedro Castelo",
        email: "pedro@email.com"
    }
]



export class UserController {
    createUser = (request: Request, response: Response) => {
        const bodyRequest = request.body
        db.push(bodyRequest)
        console.log(db)

        return response.status(201).json({ message: "Registro criado" })
    }
}