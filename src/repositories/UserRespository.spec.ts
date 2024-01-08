import { getMockEntityManager } from "../__mocks__/mockEntityManager.mock"
import { User } from "../entities/User"
import { UserRepository } from "./UserRepository"

describe('UserRepository', ()=>{

    let userRepository: UserRepository

    const mockUser: User = {
        user_id: '123456',
        name: 'pedro',
        email: 'pedro@eamil',
        password: 'amoBatata'
    }

    beforeAll( async()=>{
        const managerMock =  await getMockEntityManager({})
        const userRepository = new UserRepository(managerMock)
    })

    it('Deve criar um novo usuario no banco de dados', async ()=>{
         await userRepository.createUser(mockUser)
    })

})