import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entitys";

@Injectable()
export class CategoriaService {

  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>
  ) {}

  // CRIAR CATEGORIA
  async create(categoria: Categoria): Promise<Categoria> {
    const categorias = this.categoriaRepository.create(categoria);
    return await this.categoriaRepository.save(categoria);
  }

  // BUSCAR TODOS
  async findAll(): Promise<Categoria[]> {
    return await this.categoriaRepository.find();
  }

  // BUSCAR POR ID
  async findById(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOneBy({ id });

    if (!categoria)
      throw new HttpException("Categoria não encontrada", HttpStatus.NOT_FOUND);

    return categoria;
  }

  // BUSCAR POR NOME
  async findByNome(nome: string): Promise<Categoria[]> {
    return await this.categoriaRepository.find({
      where: {
        nome: nome
      }
    });
  }

  // ATUALIZAR
  async update(id: number, categoria: Categoria): Promise<Categoria> {
    await this.findById(id);

    await this.categoriaRepository.update(id, categoria);
    return await this.findById(id);
  }

  // DELETAR
  async delete(id: number): Promise<void> {
    await this.findById(id);
    await this.categoriaRepository.delete(id);
  }
}
