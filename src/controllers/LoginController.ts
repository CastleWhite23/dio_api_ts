import  { Request, Response } from 'express';

const user ={
    id:'123456',
    name: 'Pedro Castelo',
    email:'pedro@email.com',
    password:'123456'
}

export class LoginController{
    login = async (request: Request, response: Response) => {
        return response.status(200).json(user);
    }
}