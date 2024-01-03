import { makeMockRequest } from "../__mocks__/mockRequest.mock"
import { UserService } from "../services/UserService"
import { UserController } from "./UserController"
import { Response } from "express"

type MockResponse<Tresult> = Response & {
    state: {
        status?: number,
        json?: Tresult | unknown
    }
}


describe('UserController', ()=>{
    const mockUserService: Partial<UserService> = {}//. O uso de Partial<T> é uma característica do TypeScript que indica que não é necessário fornecer todas as propriedades definidas em UserService no objeto mockUserService.

    const userController = new UserController(mockUserService as UserService)

    
    
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