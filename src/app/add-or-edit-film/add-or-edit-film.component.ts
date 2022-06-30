import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilmService } from '../@shared/services/film.service';


@Component({
  selector: 'app-add-or-edit-film',
  templateUrl: './add-or-edit-film.component.html',
  styleUrls: ['./add-or-edit-film.component.css']
})
export class AddOrEditFilmComponent implements OnInit {

  constructor(private filmService: FilmService) { }

  //formulaire
  filmForm = new FormGroup({
    titre: new FormControl<string>('', [Validators.required]),
    synopsis: new FormControl(null, [Validators.required]),
    note : new FormControl(null, [Validators.required])
  });

  submitFilm() {
      console.log(this.filmForm.value);
  }

  @Output() newItemEvent = new EventEmitter();


  addNewFilm() {
    this.newItemEvent.emit({
      titre: this.filmForm.controls.titre.value,
      synopsis: this.filmForm.controls.synopsis.value,
      note: this.filmForm.controls.note.value
    })

    //this.newItemEvent.emit(value);
  }

  addFilm() {
    this.filmService.addFilm({
      title: this.filmForm.controls.titre.value as string,
      synopsis: this.filmForm.controls.synopsis.value,
      note: this.filmForm.controls.note.value}).subscribe()
  }

  ngOnInit(): void {
  }

}
