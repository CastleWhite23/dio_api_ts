import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class User{
    @PrimaryColumn()
    user_id: string

    @Column({ nullable: false})
    name: string

    @Column({ nullable: false})
    email: string

    @Column({ nullable: false})
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