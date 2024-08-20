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
      name: ['', [Validators.required, Validators.minLength(2)]],
      poster: '',
      rating: [
        '',
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      synopsis: '',
      background: '',
      language: '',
      duration: '',
      genre: '',
      relaseDate: '',
      cast: '',
      director: '',
    });
  }

  addMovie() {
    console.log(this.movieForm.value);
    // Todo: Fix Add - Technical Debt
    if (this.movieForm.value) {
      let newMovie: any = this.movieForm.value;
      this.movieService.addMovieP(newMovie).then(() => {
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
