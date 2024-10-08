import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { routes } from '../app.routes';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HistoryComponent } from '../history/history.component';
import { HistoryService } from '../history.service';
import { LoginService } from '../login.service';
import { title } from 'process';
@Component({
  selector: 'app-bookticket',
  standalone: true,
  imports: [
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './bookticket.component.html',
  styleUrl: './bookticket.component.scss',
})
export class BookticketComponent {
  ticketsData: any;
  id: any;
  selectedData: any = {
    theaterName: '',
    timing: '',
    date: '',
  };
  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private snackBar: MatSnackBar,
    private historyService: HistoryService,
    private loginService: LoginService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    console.log(this.id);
    this.moviesService
      .getTicketsDataById(this.id)
      .then((data) => (this.ticketsData = data));
    console.log(this.ticketsData);
  }
  selectTiming(timing: string, name: any) {
    console.log(timing);
    console.log(name);
    this.selectedData.timing = timing;
    this.selectedData.theaterName = name;
    this.selectedData.date = this.ticketsData.date;
    console.log(this.selectedData);
  }
  navigateTo() {
    this.historyService.addHistory({
      ...this.selectedData,
      userName: this.loginService.userName,
      title: this.ticketsData.title,
    });
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 5000, // Duration in milliseconds
      verticalPosition: 'top', // Position on the screen
      // horizontalPosition: '', // Position on the screen
      panelClass: ['snack-bar-success'],
    });
    this.router.navigate([
      `/movies/booktickets/final/${this.ticketsData.movieId}`,
    ]);
    console.log(this.selectedData);
    this.moviesService.selectedDate = {
      ...this.selectedData,
      title: this.ticketsData.title,
    };
  }
}
