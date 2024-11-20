import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  Length,
} from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFilmDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id_episodio: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  introduccion: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  director: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productor: string;

  @ApiProperty({ default: '2022-01-01' })
  @IsNotEmpty()
  @IsString()
  @Length(10, 10, {
    message: 'Debe ingresar el valor en formato de fecha: AAAA-MM-DD',
  })
  fecha_lanzamiento: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  url: string;
}
