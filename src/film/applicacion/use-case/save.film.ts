import { Inject, Injectable } from '@nestjs/common';
import { FilmRepository } from '../../domain/repository/film.repository';
import { Film } from '../../domain/film';

@Injectable()
export class SaveFilmUseCase {
  constructor(
    @Inject('FILM_REPOSITORY')
    private readonly filmRepository: FilmRepository,
  ) {}

  async execute(film: Film): Promise<void> {
    this.filmRepository.save(film);
  }
}
