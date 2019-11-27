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
  error: string;
  movie: any;
  omdbapiUrl = `http://www.omdbapi.com/?apikey=${environment.imdbKey}`;
  page: number = 1;
  pages: number;
  loadingMovies: boolean;
  loadingMovie: boolean;

  constructor(private http: HttpClient) {}

  getFilms() {
    this.loadingMovies = true;
    this.http.get(`${this.omdbapiUrl}&s=${this.titleMovie}&page=${this.page}`).subscribe((data: any) => {
      if (data.Error) {
        this.error = data.Error;
      }
      this.movies = data.Search;
      this.loadingMovies = false;
      this.movie = null;
      this.pages = Math.floor(data.totalResults/10) + 1;
    })
  }

  openFilm(id) {
    this.loadingMovie = true;
    this.http.get(`${this.omdbapiUrl}&i=${id}`).subscribe((data: any) => {
      this.movie = data;
      this.loadingMovie = false;
    })
  }

  goToPage(page) {
    this.page = page;
    this.getFilms();

  }

}
