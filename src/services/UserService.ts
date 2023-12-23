
const db = [
    {
        name: "Pedro Castelo",
        email: "pedro@email.com"
    }
]

//db.push(bodyRequest)
//console.log(db)




export class UserService{
    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }      

        db.push(user)

    }


}