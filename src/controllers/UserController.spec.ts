import { makeMockRequest } from "../__mocks__/mockRequest.mock"
import { makeMockResponse } from "../__mocks__/mockResponse.mock"
import { UserService } from "../services/UserService"
import { UserController } from "./UserController"
import { Request } from "express"

describe('UserController', ()=>{
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn()

    }//. O uso de Partial<T> é uma característica do TypeScript que indica que não é necessário fornecer todas as propriedades definidas em UserService no objeto mockUserService.

    const userController = new UserController(mockUserService as UserService)

    it('Deve adicionar um novo usuario', () => {
        const mockRequest = {
            body: {
                name: "pedro",
                email: "pedro@email"
            }
        } as Request;
        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);

        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: "Registro criado"})
    });





})