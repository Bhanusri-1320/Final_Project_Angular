import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPseudoCheckboxModule,
    NgFor,
  ],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss',
})
export class AddMovieComponent {
  movieForm!: FormGroup;

  constructor(
    public movieService: MoviesService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // formGroup -> formControlName
    this.movieForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      poster: '',
      ratings: [
        ' ',
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      synopsis: '',
      background: '',
      language: '',
      duration: '',
      genre: '',
      releaseDate: '',
      // cast: [''],
      director: '',
      trailer: '',
    });
  }

  addMovie() {
    console.log(this.movieForm.value);
    console.log(this.movieForm.value);
    // Todo: Fix Add - Technical Debt
    if (this.movieForm.value) {
      let newMovie: any = this.movieForm.value;
      console.log(newMovie);
      newMovie.ratings += '';
      const NewMovie = { ...newMovie, ratings: newMovie.ratings.toString() };
      console.log(NewMovie);
      this.movieService.addMovieP(NewMovie).then(() => {
        // Move to movies page
        this.router.navigate(['movies']);
      });
    }
  }
  get name() {
    return this.movieForm.get('name');
  }

  get rating() {
    return this.movieForm.get('rating');
  }
}
