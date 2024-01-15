import { UserController } from "./UserController";
import { UserService } from '../services/UserService'
import { Request } from 'express'
import { makeMockResponse } from "../__mocks__/mockResponse.mock";

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn()
    }

    const userController = new UserController(mockUserService as UserService);

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: 'nath@test.com',
                password: '123456'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' })
    })

    it('Verificar a resposta de erro caso o usuário não informe o name', () => {
        const mockRequest = {
            body: {
                name: '',
                email: 'pedro@email',
                password: '123456'
            }
        } as Request

        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)

        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: "Bad request! Name obrigatório" })
    })

    it(' O usuário nâo pode ser criado caso não informe o email', () => {
        const mockRequest = {
            body: {
                name: 'pedro',
                email: '',
                password: '123456'
            }
        } as Request

        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)

        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: "Bad request! Email obrigatório" })
    })

    it(' O usuário nâo pode ser criado caso não informe o password', () => {
        const mockRequest = {
            body: {
                name: 'pedro',
                email: 'pedro@email',
                password: ''
            }
        } as Request

        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)

        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: "Bad request! Senha obrigatória" })
    })

    it('Excluir usuarios', () => {
        const mockRequest = {} as Request
        const mockResponse = makeMockResponse()
        userController.delete(mockRequest, mockResponse)

        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário deletado' })

    })
})
