import  { Request, Response } from 'express';
import { sign } from 'jsonwebtoken'

const user ={
    id_user:'123456',
    name: 'Pedro Castelo',
    email:'pedro@email.com',
    password:'123456'
}

export class LoginController{
    login = async (request: Request, response: Response) => {

        const tokenData = {
            name: user.name,
            email: user.email
        }//dados que vão para o nosso token jwt

        const tokenKey = '123456789' //chave para poder desincriptografar esses dados

        const tokenOptions = {
            subject: user.id_user
        }//opções para colocar no token
        //{
            //expireIn: '4h'
        //}

        const token =  sign(tokenData, tokenKey, tokenOptions)

        return response.status(200).json({token});
    }
}