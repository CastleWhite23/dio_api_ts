import { UserService } from "./UserService"

describe("UserService", ()=>{

    const userService =  new UserService()
    it('Receber um console.log', ()=>{
        

        const mockConsole = jest.spyOn(global.console, "log")

        userService.createUser("pedro", "pedro@email")
        
        expect(mockConsole).toHaveBeenCalled()
    })
})