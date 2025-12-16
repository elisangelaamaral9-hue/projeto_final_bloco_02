import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { UsuarioService } from "../service/usuario.service";
import { Usuario } from "../entities/usuario.entitys";


@Controller("/usuario")
export class UsuarioController {

  constructor(private readonly usuarioService: UsuarioService) {}

  // CRIAR USUARIO
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() usuario: Usuario) {
    return this.usuarioService.create(usuario);
  }

  // LISTAR TODOS   
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.usuarioService.findAll();
  }

  // BUSCAR POR ID
  @Get("/:id")
  @HttpCode(HttpStatus.OK)
  findById(@Param("id", ParseIntPipe) id: number) {
    return this.usuarioService.findById(id);
  }

  // BUSCAR POR DESCRIÇÃO
  @Get("/nome/:nome")
  @HttpCode(HttpStatus.OK)
  findByNome(@Param("nome") nome: string) {
    return this.usuarioService.findByNome(nome);
  }

  // ATUALIZAR USUARIO POR ID
  @Put("/:id")
  @HttpCode(HttpStatus.OK)
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() usuario: Usuario
  ) {
    return this.usuarioService.update(id, usuario);
  }

  // DELETAR PRODUTO POR ID
  @Delete("/:id")
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param("id", ParseIntPipe) id: number) {
    return this.usuarioService.delete(id);
  }
}