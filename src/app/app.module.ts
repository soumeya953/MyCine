import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOrEditFilmComponent } from './add-or-edit-film/add-or-edit-film.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyFilmsComponent } from './my-films/my-films.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddOrEditFilmComponent,
    MyFilmsComponent,
    FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
