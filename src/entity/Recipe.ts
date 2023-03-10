import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Recipe {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    summary: string

    @Column()
    spoonacularId: string

}
