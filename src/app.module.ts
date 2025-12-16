import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entitys';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produtos/produto.module';
import { Produto } from './produtos/entities/produto.entitys';
import { Usuario } from './usuario/entities/usuario.entitys';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_projeto_final_bloco_02',
      entities: [Categoria, Produto, Usuario],
      synchronize: true,
      logging :true,
    }),

    CategoriaModule,
    ProdutoModule,

  ],

    controllers: [],
    providers: [],

})
export class AppModule{}

