import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class User{
    @PrimaryColumn()
    user_id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    constructor(
        user_id: string,
        name: string,
        email: string,
        password: string
    ){
        this.user_id = user_id
        this.name = name
        this.email = email
        this.password = password
    }




}