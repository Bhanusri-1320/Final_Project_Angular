import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  roleId: any;
  signupForm!: FormGroup;
  users: { userName: string; password: string }[] = []; // Array to store users
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private loginService: LoginService
  ) {
    this.signupForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.signupForm.valid) {
      const { userName, password } = this.signupForm.value;
      // this.users.push({ userName, password }); // Store the user credentials
      console.log('Stored Users:', this.users);
      this.loginService
        .createUser(this.signupForm.value)
        .then(() => this.route.navigate(['/movies']))
        .then(() => this.openSnackBar(`signup successfull.`, 'ok'))
        .catch(() => this.route.navigate(['/login']));
    }
  }
  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  get userName() {
    return this.signupForm.get('userName');
  }
  get password() {
    return this.signupForm.get('password');
  }
}
