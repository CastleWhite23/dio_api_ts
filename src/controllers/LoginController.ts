const user ={
    id:'123456',
    name: 'Pedro Castelo',
    email:'pedro@email.com',
    password:'123456'
}

export class LoginController{
    login = async () => {
        return user;
    }
}