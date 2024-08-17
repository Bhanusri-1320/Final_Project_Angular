import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  moviesList: any = [];
  isLoading: boolean = true;
  msg = '';
  constructor(public moviesService: MoviesService, private router: Router) {}

  // After Initialization of the component
  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.moviesService
      .getAllMoviesP()
      .then((data) => {
        this.moviesList = data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
  }
}
