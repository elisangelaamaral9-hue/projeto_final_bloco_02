import { IsNotEmpty } from "class-validator"
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Produto } from "../../produtos/entities/produto.entitys"

@Entity({name: "tb_categoria"})
export class Categoria {

    // ATRIBUTO ID
    @PrimaryGeneratedColumn()
    id: number

    // ATRIBUTO NOME
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    // RELACIONAMENTO DE TABELAS
   @OneToMany(() => Produto, (produto) => produto.categoria, {
        onDelete: "CASCADE"
    })
    produto: Produto;


}