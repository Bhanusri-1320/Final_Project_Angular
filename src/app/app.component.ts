import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { LoginService } from './login.service';
import { ConformDialogComponent } from './conform-dialog/conform-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MovieComponent,
    MovieListComponent,
    RouterLink,
    ConformDialogComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app';
  constructor(public loginService: LoginService, private dialog: MatDialog) {}
  ngOnInit() {
    if (localStorage.length > 0) {
      this.loginService.loginSuccess = true;
    }
  }
}
