import { Injectable } from '@nestjs/common';
import { Film } from 'src/film/domain/film';
import { FilmRepository } from 'src/film/domain/repository/film.repository';

@Injectable()
export class MemoryFilmRepository implements FilmRepository {
  private films: Film[] = [];

  async findAll(): Promise<Film[] | null> {
    return this.films.length > 0 ? this.films : null;
  }

  async findOne(id: string): Promise<Film | null> {
    const film = this.films.find((film) => film.id === id);
    return film || null;
  }

  async save(film: Film): Promise<void> {
    const existingIndex = this.films.findIndex((f) => f.id === film.id);

    if (existingIndex !== -1) {
      this.films[existingIndex] = film;
    } else {
      this.films.push(film);
    }
    return;
  }
}
