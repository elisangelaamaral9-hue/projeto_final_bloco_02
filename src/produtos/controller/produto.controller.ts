import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProdutoService } from "../service/produto.service";
import { Produto } from "../entities/produto.entitys";


@Controller("/produto")
export class ProdutoController {

  constructor(private readonly produtoService: ProdutoService) {}

  // CRIAR PRODUTO
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() produto: Produto) {
    return this.produtoService.create(produto);
  }

  // LISTAR TODOS   
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.produtoService.findAll();
  }

  // BUSCAR POR ID
  @Get("/:id")
  @HttpCode(HttpStatus.OK)
  findById(@Param("id", ParseIntPipe) id: number) {
    return this.produtoService.findById(id);
  }

  // BUSCAR POR DESCRIÇÃO
  @Get("/descricao/:descricao")
  @HttpCode(HttpStatus.OK)
  findByNome(@Param("descricao") descricao: string) {
    return this.produtoService.findByDescricao(descricao);
  }

  // ATUALIZAR PRODUTO POR ID
  @Put("/:id")
  @HttpCode(HttpStatus.OK)
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() produto: Produto
  ) {
    return this.produtoService.update(id, produto);
  }

  // DELETAR PRODUTO POR ID
  @Delete("/:id")
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param("id", ParseIntPipe) id: number) {
    return this.produtoService.delete(id);
  }
}