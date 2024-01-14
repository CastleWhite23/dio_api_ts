import { EntityManager } from "typeorm"
import { getMockEntityManager } from "../__mocks__/mockEntityManager.mock"
import { User } from "../entities/User"
import { UserRepository } from "./UserRepository"

describe('UserRepository', ()=>{

    let userRepository: UserRepository
    let managerMock: Partial<EntityManager>

    const mockUser: User = {
        user_id: '123456',
        name: 'pedro',
        email: 'pedro@eamil',
        password: 'amoBatata'
    }

    beforeAll( async()=>{
        managerMock =  await getMockEntityManager({
            saveReturn: mockUser

        })
        userRepository = new UserRepository(managerMock as EntityManager)
    })

    it('Deve criar um novo usuario no banco de dados', async ()=>{
         const response = await userRepository.createUser(mockUser)

         expect(response).toMatchObject(mockUser)
    })

})