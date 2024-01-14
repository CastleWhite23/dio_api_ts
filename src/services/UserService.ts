import { AppDataSource } from "../database"
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository"

export class UserService {
    private userRepository: UserRepository;

    constructor(
        userRepository = new UserRepository(AppDataSource.manager)
    ){
        this.userRepository = userRepository
    }

    createUser = async (name: string, email: string, password: string): Promise<User> => {
        const user =  new User(name, email, password)
        return this.userRepository.createUser(user)
    }

    getUser = () => {
        
    }

    // delete = () => {

    // }
}

