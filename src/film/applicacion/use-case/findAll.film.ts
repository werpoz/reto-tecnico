import { Inject, Injectable } from '@nestjs/common';
import { FilmRepository } from '../../domain/repository/film.repository';
import { Film } from 'src/film/domain/film';

@Injectable()
export class FindFilmUseCase {
  constructor(
    @Inject('FILM_REPOSITORY')
    private readonly filmRepository: FilmRepository,
  ) { }

  async execute(): Promise<Film[]> {
    const data = await this.filmRepository.findAll();
    if (data == null) return []
    return data

  }
}
