import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatIconModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  movie!: any;
  trustedUrl!: SafeUrl;
  isLoading: boolean = true;
  msg = '';
  id: any;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer
  ) {}

  // After Initialization of the component
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string; // From URL
    this.movieService
      .getMovieByIdP(this.id)
      .then((data) => {
        this.movie = data; // Model
        this.isLoading = false;
        console.log(this.movie);
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
  }
}
