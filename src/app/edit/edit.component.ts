import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPseudoCheckboxModule } from '@angular/material/core';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPseudoCheckboxModule,
    NgFor,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  movieForm!: FormGroup;
  id: any;
  constructor(
    public movieService: MoviesService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    // formGroup -> formControlName
    this.movieForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      poster: '',
      ratings: [
        '',
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

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string; // From URL
    this.movieService.getMovieByIdP(this.id).then((data) => {
      console.log(data);
      // this.movieForm.setValue vs this.movieForm.patchValue
      this.movieForm.patchValue(data);
    });
  }
  editMovie() {
    console.log(this.movieForm.value);
    // Todo: Fix Add - Technical Debt

    if (this.movieForm.valid) {
      let updatedMovie: any = this.movieForm.value;
      console.log(this.movieForm.value);

      this.movieService.editMovie(this.id, updatedMovie).then(() => {
        // Move to movies page
        this.router.navigate(['/movies']);
      });
    }
  }
  get name() {
    return this.movieForm.get('name');
  }

  get poster() {
    return this.movieForm.get('poster');
  }

  get rating() {
    return this.movieForm.get('rating');
  }
}
