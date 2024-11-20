import { Film } from '../film';

export interface FilmRepository {
  findAll(): Promise<Film[] | null>;
  findOne(id: string): Promise<Film | null>;
  save(film: Film): Promise<void>;
}
