import { Inject, Injectable } from '@nestjs/common';
import { FilmRepository } from '../../domain/repository/film.repository';
import { Film } from 'src/film/domain/film';

@Injectable()
export class FindByIdFilmUseCase {
  constructor(
    @Inject('FILM_REPOSITORY')
    private readonly filmRepository: FilmRepository,
  ) {}

  async execute(id: string): Promise<Film> {
    const data = await this.filmRepository.findOne(id);
    return data
  }
}
