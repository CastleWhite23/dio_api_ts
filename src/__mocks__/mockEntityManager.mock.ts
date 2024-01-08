import { EntityManager } from "typeorm";

interface MockManagerArgs {
    saveReturn?: object | [object]
}

export const getMockEntityManager = async ({
    saveReturn = undefined
}: MockManagerArgs): Promise<EntityManager> => {
    const manager: Partial<EntityManager> = {}

    manager.save = jest.fn().mockImplementation(() => Promise.resolve(saveReturn))

    return manager as EntityManager
}