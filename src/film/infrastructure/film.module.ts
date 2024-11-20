// src/films/films.module.ts
import { Module } from '@nestjs/common';
import { FilmController } from './controller/film.controller';
import { HttpModule } from '@nestjs/axios';
import { StarWarsApiProvider } from './provider/starwars-api.provider';
import { MemoryFilmRepository } from './repository/memmory/memmory.repository';
import { FindFilmUseCase } from '../applicacion/use-case/findAll.film';
import { SaveFilmUseCase } from '../applicacion/use-case/save.film';
import { FindByIdFilmUseCase } from '../applicacion/use-case/findById.film';
import { FilmsService } from '../applicacion/service/film.service';

@Module({
  imports: [HttpModule],
  controllers: [FilmController],
  providers: [
    FindFilmUseCase,
    SaveFilmUseCase,
    FindByIdFilmUseCase,
    FilmsService,
    {
      provide: 'FILM_REPOSITORY',
      useClass: MemoryFilmRepository,
    },
    StarWarsApiProvider,
  ],
})
export class FilmModule {}
