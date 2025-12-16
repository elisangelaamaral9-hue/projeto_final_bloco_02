import { IsNotEmpty } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name: "tb_categoria"})
export class Categoria {

    // ATRIBUTO ID
    @PrimaryGeneratedColumn()
    id: number

    // ATRIBUTO NOME
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

}