import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  titleMovie: string;
  movies: any[];
  movie: any;
  omdbapiUrl = `http://www.omdbapi.com/?apikey=${environment.imdbKey}`;

  constructor(private http: HttpClient) {}

  getFilms() {
    this.http.get(`${this.omdbapiUrl}&s=${this.titleMovie}`).subscribe((data: any) => {
      this.movies = data.Search;
      this.movie = null;
    })
  }

  openFilm(id) {
    this.http.get(`${this.omdbapiUrl}&i=${id}`).subscribe((data: any) => {
      this.movie = data;
    })
  }

}
