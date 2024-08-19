import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router, RouterLink } from '@angular/router';
import { MovieComponent } from '../movie/movie.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { debounceTime, switchMap } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { BannerCarouselComponent } from '../banner-carousel/banner-carousel.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieComponent,
    MatButtonModule,
    FormsModule,
    RouterLink,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BannerCarouselComponent,
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  searchForm!: FormGroup;
  moviesList: any = [];
  isLoading: boolean = true;
  msg = '';
  imageUrls!: Array<any>;
  constructor(
    public moviesService: MoviesService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      search: '',
    });
  }

  // After Initialization of the component
  ngOnInit() {
    this.loadMovies();
    this.searchForm
      .get('search')
      ?.valueChanges.pipe(
        debounceTime(300),
        switchMap((searchTerm) => this.moviesService.searchUser(searchTerm))
      )
      .subscribe((data) => {
        console.log(data);
        this.moviesList = data;
      });
    //main banner image url
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
