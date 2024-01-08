import { EntityManager } from "typeorm";

interface MockImplementatiosArgs{
    saveReturn?: object | [object]
}

export const getMockEntityManager = async({
    saveReturn =  undefined
}: MockImplementatiosArgs): Promise<EntityManager> =>{
    const manager: Partial<EntityManager> = {}

    manager.save = jest.fn().mockImplementation(() => Promise.resolve(saveReturn))

    return manager as EntityManager
}