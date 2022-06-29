import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor( private httpClient : HttpClient) {

  }

  getFilms(){
    return this.httpClient.get<Film[]>(`${environment.api}/films`);
  }
}
