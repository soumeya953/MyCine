import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor( private httpClient : HttpClient) {
  }

  //renvoie les films dans la bdd
  getFilms(){
    return this.httpClient.get<Film[]>(`${environment.api}/films`);
  }

  //ajout d'un film dans la bdd
  addFilm(film : Partial<Film>) {
    return this.httpClient.post<Film>(`${environment.api}/films`, film);
  }
}
