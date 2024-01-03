import { UserService } from "../services/UserService"
import { UserController } from "./UserController"
import { Params } from 'express-serve-static-core'
import { Request } from "express"

describe('UserController', ()=>{
    const mockUserService: Partial<UserService>= {} //. O uso de Partial<T> é uma característica do TypeScript que indica que não é necessário fornecer todas as propriedades definidas em UserService no objeto mockUserService.

    const userController = new UserController(mockUserService as UserService)

    const makeMockRequest = ({params, query}: {params?: Params, query?: Params}) : Request => {
        const request = {
            params: params || {},
            query: query || {}
        } as unknown

        return request as Request
    }
    it('Deve adicionar um novo usuario', ()=>{
        const mokcRequest  = makeMockRequest({})
        const response = userController.createUser(mokcRequest)

        console.log(userController)
    })




})