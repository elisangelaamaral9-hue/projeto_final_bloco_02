import { IsNotEmpty } from "class-validator"
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Categoria } from "../../categoria/entities/categoria.entitys"

@Entity({name: "tb_produto"})
export class Produto {

    // ATRIBUTO ID
    @PrimaryGeneratedColumn()
    id: number

    // ATRIBUTO DESCRIÇÃO
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    descricao: string

    // VALOR
    @IsNotEmpty()
    @Column({type: "decimal", precision: 10, scale: 2, nullable: false, default: 0.00})
    valor: number

    // DATA DE VALIDADE
    @Column({ type: "date" })
    dataValidade: string

    // RELACIONAMENTO DE TABELA
    @ManyToOne(() => Categoria, (categoria) => categoria.produto)
    categoria: Categoria;

}