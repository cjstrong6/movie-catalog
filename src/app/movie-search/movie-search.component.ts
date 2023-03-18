// movie-search.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import {ImdbMovie} from "../imdb-response";

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  movies: ImdbMovie[] = [];
  selectedMovie?: ImdbMovie;
  query: string = '';
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
  }

  searchMovies(query: string): void {
    console.log('Query:', query);
    const temp = this.movieService.searchMovies(query)
    temp.subscribe(movies => {
      console.log('Movies:', movies);
      this.movies = movies.Search;
    });
  }

  showMovieDetails(movie: ImdbMovie): void {
    this.router.navigate(['/movie-details', movie.imdbID]);
  }
}
