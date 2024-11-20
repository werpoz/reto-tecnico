// src/films/infrastructure/provider/starwars-api.provider.ts
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Film } from 'src/film/domain/film';

@Injectable()
export class StarWarsApiProvider {
  constructor(private readonly httpService: HttpService) {}

  async get(url: string): Promise<Film[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Film[]>(url).pipe(
        catchError((error: AxiosError) => {
          throw 'An error happened!' + error.message;
        }),
      ),
    );
    return data;
  }
}
