import { makeMockRequest } from "../__mocks__/mockRequest.mock"
import { makeMockResponse } from "../__mocks__/mockResponse.mock"
import { UserService } from "../services/UserService"
import { UserController } from "./UserController"

describe('UserController', ()=>{
    const mockUserService: Partial<UserService> = {}//. O uso de Partial<T> é uma característica do TypeScript que indica que não é necessário fornecer todas as propriedades definidas em UserService no objeto mockUserService.

    const userController = new UserController(mockUserService as UserService)

    it('Deve adicionar um novo usuario', () => {
        const mockRequest = makeMockRequest({});
        const mockResponse = makeMockResponse();
        const response = userController.createUser(mockRequest, mockResponse);
    });





})