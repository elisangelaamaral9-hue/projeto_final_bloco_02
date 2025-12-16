import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioService } from "./service/usuario.service";
import { UsuarioController } from "./controller/usuario.controller";
import { Usuario } from "./entities/usuario.entitys";


@Module({
    imports: [TypeOrmModule.forFeature ([Usuario])],
        providers: [UsuarioService],
        controllers: [UsuarioController],
        exports: [UsuarioService],
})

export class UsuarioModule {}