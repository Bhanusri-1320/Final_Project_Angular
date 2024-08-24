import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../login.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    RouterLink,
    MatTooltipModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  loginForm: FormGroup;
  users: { userName: string; password: string }[] = []; // Array to store users
  roleId: any = 0;
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.roleId = localStorage.getItem('roleId');
    console.log('con', this.roleId);
  }
  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { userName, password, roleId } = this.loginForm.value;
      this.users.push({ userName, password }); // Store the user credentials
      this.loginService
        .loginUser(this.loginForm.value)
        .then((data) => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('roleId', data.roleId);
          localStorage.setItem('userName', data.userName);
        })
        .then(() => {
          if (localStorage.getItem('token') != 'undefined') {
            this.route.navigate(['/movies']);
            this.loginService.loginSuccess = true;
            this.openSnackBar(
              ` Hi, ${this.loginForm.value.userName}, you have loggedin successfully.`,
              'ok'
            );
          } else {
            this.route.navigate([`/signup`]);
          }
        });
      console.log(this.loginService.loginSuccess);

      // Handle login logic here (e.g., authentication)

      // .then(() =>
      //   this.openSnackBar(
      //     `${this.loginForm.value.userName} loggedin successfully.`,
      //     'ok'
      //   )
      // );
    }
  }
  get userName() {
    return this.loginForm.get('userName');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
