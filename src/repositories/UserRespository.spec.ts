import { getMockEntityManager } from "../__mocks__/mockEntityManager.mock"
import { UserRepository } from "./UserRepository"

describe('UserRepository', ()=>{

    let userRepository: UserRepository

    beforeAll( async()=>{
        const managerMock =  await getMockEntityManager({})
        const userRepository = new UserRepository(managerMock)
    })

    it('Deve criar um novo usuario no banco de dados', async ()=>{
         await userRepository.createUser()
    })

})