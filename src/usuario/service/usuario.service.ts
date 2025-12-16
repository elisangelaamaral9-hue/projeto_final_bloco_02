import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { Usuario } from "../entities/usuario.entitys";

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>
  ) {}

  // CRIAR USUARIO
  async create(usuario: Usuario): Promise<Usuario> {
    const novoUsuario = this.usuarioRepository.create(usuario);
    return await this.usuarioRepository.save(novoUsuario);
  }

  // BUSCAR TODOS
  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find({
        relations : {
            categoria: true,
        }
    });
  }

  // BUSCAR POR ID
  async findById(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
           where : {
                id
            },
            relations: {
                categoria: true,
            }
        });

    if (!usuario) {
      throw new HttpException(
        "usuario não encontrado",
        HttpStatus.NOT_FOUND
      );
    }

    return usuario;
  }

  // BUSCAR POR NOME
  async findByNome(nome: string): Promise<Usuario[]> {
  return await this.usuarioRepository.find({
    where: {
      nome: ILike(`%${nome}%`)
    },
     relations: {
                categoria: true,
            }


  });
}

  // ATUALIZAR
  async update(id: number, usuario: Usuario): Promise<Usuario> {
    await this.findById(id);

    await this.usuarioRepository.update(id, usuario);
    return await this.findById(id);
  }

  // DELETAR
  async delete(id: number): Promise<void> {
    await this.findById(id);
    await this.usuarioRepository.delete(id);
  }
}
