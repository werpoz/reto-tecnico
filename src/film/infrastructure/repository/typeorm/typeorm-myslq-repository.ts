import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from 'src/film/domain/film';
import { FilmRepository } from 'src/film/domain/repository/film.repository';
import { FilmEntity } from './film.entity';

@Injectable()
export class TypeORMFilmRepository implements FilmRepository {
  constructor(
    @InjectRepository(FilmEntity)
    private readonly repository: Repository<FilmEntity>,
  ) {}

  async findAll(): Promise<Film[] | null> {
    const entities = await this.repository.find();
    if (!entities.length) return null;

    return entities.map(
      (entity) =>
        new Film(
          entity.id.toString(),
          entity.title,
          entity.episodeId,
          entity.openingCrawl,
          entity.director,
          entity.producer,
          entity.url,
          entity.releaseDate,
          entity.createdAt,
          entity.updatedAt,
        ),
    );
  }

  async findOne(id: string): Promise<Film | null> {
    const entity = await this.repository.findOneBy({ id: parseInt(id, 10) });
    if (!entity) return null;

    return new Film(
      entity.id.toString(),
      entity.title,
      entity.episodeId,
      entity.openingCrawl,
      entity.director,
      entity.producer,
      entity.url,
      entity.releaseDate,
      entity.createdAt,
      entity.updatedAt,
    );
  }

  async save(film: Film): Promise<void> {
    const entity = this.repository.create({
      id: parseInt(film.id, 10),
      title: film.title,
      episodeId: film.episodeId,
      openingCrawl: film.openingCrawl,
      director: film.director,
      producer: film.producer,
      url: film.url,
      releaseDate: film.releaseDate,
      createdAt: film.createdAt,
      updatedAt: film.updatedAt,
    });

    await this.repository.save(entity);
  }
}
