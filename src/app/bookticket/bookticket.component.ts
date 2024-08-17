import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bookticket',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bookticket.component.html',
  styleUrl: './bookticket.component.scss',
})
export class BookticketComponent {
  ticketsData: any;
  constructor(private moviesService: MoviesService) {}
  ngOnInit() {
    this.ticketsData = this.moviesService.getTicketsDataById('1');
    console.log(this.ticketsData);
  }
}
