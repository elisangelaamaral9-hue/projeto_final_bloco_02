import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CategoriaService } from "../service/categoria.service";
import { Categoria } from "../entities/categoria.entitys";


@Controller("/categoria")
export class CategoriaController {

  constructor(private readonly categoriaService: CategoriaService) {}

  // CRIAR CATEGORIA
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() categoria: Categoria) {
    return this.categoriaService.create(categoria);
  }

  // LISTAR TODOS   
  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }

  // BUSCAR POR ID
  @Get("/:id")
  findById(@Param("id", ParseIntPipe) id: number) {
    return this.categoriaService.findById(id);
  }

  // BUSCAR POR NOME
  @Get("/nome/:nome")
  findByNome(@Param("nome") nome: string) {
    return this.categoriaService.findByNome(nome);
  }

  // ATUALIZAR CATEGORIA POR ID
  @Put("/:id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() categoria: Categoria
  ) {
    return this.categoriaService.update(id, categoria);
  }

  // DELETAR CATEGORIA POR ID
  @Delete("/:id")
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param("id", ParseIntPipe) id: number) {
    return this.categoriaService.delete(id);
  }
}
