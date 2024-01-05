import { UserService } from "./UserService"
import { User } from "./UserService"
describe("UserService", ()=>{
    const mockDb: User[] = []
    const userService =  new UserService(mockDb) //aqui esta sendo mockado o banco de dados para nao ter acesso as informacoes do banco de dados
    it('Receber um console.log', ()=>{
        
       
        const mockConsole = jest.spyOn(global.console, "log")

        userService.createUser("pedro", "pedro@email")

        expect(mockConsole).toHaveBeenCalledWith("DB atualizado " + mockDb)
    })
})