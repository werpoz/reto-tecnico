import { ApiResponse } from '@nestjs/swagger';
import { CreateFilmDto } from '../dto/create-film.dto';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FilmsService } from 'src/film/applicacion/service/film.service';

@Controller('films')
export class FilmController {
  constructor(private readonly filmService: FilmsService) {}

  @ApiResponse({ status: 201, description: 'Creado' })
  @ApiResponse({ status: 400, description: 'Problemas con parámetros' })
  @ApiResponse({ status: 500, description: 'Problemas de servidor' })
  @Post()
  async saveFilm(@Body() data: CreateFilmDto) {
    return this.filmService.create(data);
  }

  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 400, description: 'Problemas con parámetros' })
  @ApiResponse({ status: 500, description: 'Problemas de servidor' })
  @Get()
  async getFilms() {
    return this.filmService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 400, description: 'Problemas con parámetros' })
  @ApiResponse({ status: 500, description: 'Problemas de servidor' })
  @Get('swapi')
  findSwapiAll() {
    return this.filmService.findSwapiAll();
  }

  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 400, description: 'Problemas con parámetros' })
  @ApiResponse({ status: 500, description: 'Problemas de servidor' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmService.findOne(id);
  }

  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 400, description: 'Problemas con parámetros' })
  @ApiResponse({ status: 500, description: 'Problemas de servidor' })
  @Get('swapi/:id')
  findSwapiOne(@Param('id') id: string) {
    return this.filmService.findSwapiOne(+id);
  }
}
