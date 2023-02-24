import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm"
import { IsEmail, Length } from "class-validator"

@Entity()
@Unique(["username", "email"])
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Length(5, 15)
    username: string

    @Column()
    password: string

    @Column()
    @IsEmail()
    email: string 

    @Column({ default: "" })
    image: string
}
