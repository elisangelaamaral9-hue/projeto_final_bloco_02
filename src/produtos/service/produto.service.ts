import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { Produto } from "../entities/produto.entitys";

@Injectable()
export class ProdutoService {

  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>
  ) {}

  // CRIAR PRODUTO
  async create(produto: Produto): Promise<Produto> {
    const novoProduto = this.produtoRepository.create(produto);
    return await this.produtoRepository.save(novoProduto);
  }

  // BUSCAR TODOS
  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find({
        relations : {
            categoria: true
        }
    });
  }

  // BUSCAR POR ID
  async findById(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
           where : {
                id
            },
            relations: {
                categoria: true
            }
        });

    if (!produto) {
      throw new HttpException(
        "Produto não encontrado",
        HttpStatus.NOT_FOUND
      );
    }

    return produto;
  }

  // BUSCAR POR DESCRIÇÃO
  async findByDescricao(descricao: string): Promise<Produto[]> {
  return await this.produtoRepository.find({
    where: {
      descricao: ILike(`%${descricao}%`)
    },
     relations: {
                categoria: true
            }


  });
}

  // ATUALIZAR
  async update(id: number, produto: Produto): Promise<Produto> {
    await this.findById(id);

    await this.produtoRepository.update(id, produto);
    return await this.findById(id);
  }

  // DELETAR
  async delete(id: number): Promise<void> {
    await this.findById(id);
    await this.produtoRepository.delete(id);
  }
}
