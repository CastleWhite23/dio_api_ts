import { UserRepository } from "../repositories/UserRepository";
import {UserService } from "./UserService";
jest.mock("../repositories/UserRepository")
const mockRepository =  require("../repositories/UserRepository")

describe('UserService', () => {
    const userService =  new UserService(mockRepository)
    it('Deve adicionar um novo usuário', async () => {
        mockRepository.createUser =  jest.fn().mockImplementation(() =>
            Promise.resolve({
                id_user: '123456',
                name: 'nath',
                email: 'nath@test.com',
                password: 'senha'
            })
        )

        const response = await userService.createUser('nath', 'nath@test.com', 'senha');
        expect(mockRepository.createUser).toHaveBeenCalled()
        expect(response).toMatchObject({
            id_user: '123456',
            name: 'nath',
            email: 'nath@test.com',
            password: 'senha'
        })

        
    
    })
    // it('Deve excluir um usuário', () => {
    //     const mockConsole = jest.spyOn(global.console, 'log')
    //     userService.delete();
    //     expect(mockConsole).toHaveBeenCalledWith('DB atualizado')
    // })
})
