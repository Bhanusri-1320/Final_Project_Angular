import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

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
  ],
  templateUrl: './bookticket.component.html',
  styleUrl: './bookticket.component.scss',
})
export class BookticketComponent {
  ticketsData: any;
  selectedData: any = {
    theaterName: '',
    timing: '',
    date: '',
  };
  constructor(private moviesService: MoviesService, private router: Router) {}
  ngOnInit() {
    this.ticketsData = this.moviesService.getTicketsDataById('1');
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
    this.router.navigate([
      `/movies/booktickets/final/${this.ticketsData.movieId}`,
    ]);
    console.log(this.selectedData);
    this.moviesService.selectedDate = this.selectedData;
  }
}
