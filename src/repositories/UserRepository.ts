import { EntityManager } from "typeorm";
import { AppDataSource } from "../database";
import { User } from "../entities/User";


export class UserRepository{
    private manager: EntityManager

    constructor(
        manager: EntityManager
    ){
        this.manager=manager
    }
    
    createUser = async (user: User) =>{
        return this.manager.save(user)
    }

    getUser = async (userId: string): Promise<User | null> =>{
        return this.manager.findOne(User, {
            where: {
                user_id: userId
            }
        })
    }
}