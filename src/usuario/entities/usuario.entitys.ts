import { IsNotEmpty } from "class-validator"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Categoria } from "../../categoria/entities/categoria.entitys"

@Entity({name: "tb_usuario"})
export class Usuario {

    // ATRIBUTO ID
    @PrimaryGeneratedColumn()
    id: number

    // ATRIBUTO NOME
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    // ATRIBUTO email
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    email: string

    // RELACIONAMENTO DE TABELA
    @ManyToOne(() => Categoria, (categoria) => categoria.usuario)
    categoria: Categoria;

}