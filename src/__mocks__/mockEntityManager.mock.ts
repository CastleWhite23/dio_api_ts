import { EntityManager } from "typeorm";

export const getMockEntityManager = async(): Promise<EntityManager> =>{
    const manager: Partial<EntityManager> = {}

    return manager as EntityManager
}