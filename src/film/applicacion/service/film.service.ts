import { Injectable } from '@nestjs/common';
import { StarWarsApiProvider } from 'src/film/infrastructure/provider/starwars-api.provider';
import { SaveFilmUseCase } from '../use-case/save.film';
import { CreateFilmDto } from 'src/film/infrastructure/dto/create-film.dto';
import { Film } from 'src/film/domain/film';
import { randomUUID } from 'crypto';
import { FindFilmUseCase } from '../use-case/findAll.film';
import { FindByIdFilmUseCase } from '../use-case/findById.film';

@Injectable()
export class FilmsService {
  constructor(
    private readonly starwarApi: StarWarsApiProvider,
    private readonly saveUseCase: SaveFilmUseCase,
    private readonly findUseCase: FindFilmUseCase,
    private readonly findbyIdUseCase: FindByIdFilmUseCase,
  ) {}

  async create(data: CreateFilmDto) {
    const film: Film = new Film(
      randomUUID(),
      data.titulo,
      data.id_episodio,
      data.introduccion,
      data.director,
      data.productor,
      data.url,
      data.fecha_lanzamiento,
      new Date(),
      new Date(),
    );
    return await this.saveUseCase.execute(film);
  }

  async findAll() {
    return await this.findUseCase.execute();
  }

  async findOne(id: string) {
    return await this.findbyIdUseCase.execute(id);
  }

  async findSwapiAll() {
    const result = await this.starwarApi.get(
      `${process.env.API_STARWARS}films`,
    );
    return { data: result };
  }

  async findSwapiOne(id: number) {
    const result = await this.starwarApi.get(
      `${process.env.API_STARWARS}films/${id}`,
    );
    return { data: result };
  }
}
