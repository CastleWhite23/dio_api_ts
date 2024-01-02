
export interface User{
    name: string
    email: string
}


const db = [
    {
        name: "Pedro Castelo",
        email: "pedro@email.com"
    }
]

//db.push(bodyRequest)
//console.log(db)
export class UserService{

    db: User[]
    
    constructor(database = db){
         this.db = database
    }
    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }      

        this.db.push(user)
        console.log(`Db atualizado`, this.db)
    }

    getAllUsers = () => {
        return this.db
    }


}