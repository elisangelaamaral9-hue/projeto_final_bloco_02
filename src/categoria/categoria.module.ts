import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "./entities/categoria.entitys";
import { CategoriaService } from "./service/categoria.service";
import { CategoriaController } from "./controller/categoria.controller";
import { ProdutoModule } from "../produtos/produto.module";

@Module({
    imports: [TypeOrmModule.forFeature ([Categoria]), ProdutoModule],
        providers: [CategoriaService],
        controllers: [CategoriaController],
        exports: [],
})

export class CategoriaModule {}