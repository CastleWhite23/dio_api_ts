import { UserService } from "../services/UserService"
import { UserController } from "./UserController"
import { Params } from 'express-serve-static-core'
import { Request, Response } from "express"

type MockResponse<Tresult> = Response & {
    state: {
        status?: number,
        json?: Tresult | unknown
    }
}


describe('UserController', ()=>{
    const mockUserService: Partial<UserService> = {} //. O uso de Partial<T> é uma característica do TypeScript que indica que não é necessário fornecer todas as propriedades definidas em UserService no objeto mockUserService.

    const userController = new UserController(mockUserService as UserService)

    const makeMockRequest = ({params, query}: {params?: Params, query?: Params}) : Request => {
        const request = {
            params: params || {},
            query: query || {}
        } as unknown

        return request as Request
    }
    
    function makeMockResponse <TResult> (){
        const response = {
            state: {}
        } as MockResponse<TResult>

        response.status = (status: number) =>{
            response.state.status = status
            return response
        }

        response.json = (json: TResult) =>{
            response.state.json = json
            return response
        }

        return response

    }

    
    it('Deve adicionar um novo usuario', () => {
        const mockRequest = makeMockRequest({});
        const mockResponse = makeMockResponse();
        const response = userController.createUser(mockRequest, mockResponse);
    });





})