
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie!: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const imdbID = this.route.snapshot.paramMap.get('imdbID');
    this.movieService.getMovieDetails(imdbID).subscribe(movie => {
      this.movie = movie;
    });
  }

  goBack(): void {
    this.router.navigate(['/movie-search']);
  }
}
