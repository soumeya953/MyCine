import { Component, Input, OnInit } from '@angular/core';
import { FilmService } from '../@shared/services/film.service';
import { Film } from '../@shared/models/film';


@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.css']
})
export class MyFilmsComponent implements OnInit {
  @Input() films:Film[] = []; // décorer la propriété avec @Input()


  constructor(private filmService: FilmService) {
  }

  ngOnInit() {
  //  this._httpClient.get(this.films);
    this.filmService.getFilms().subscribe(films => {
      console.warn(films)
      this.films = films;
    });
  }

}
