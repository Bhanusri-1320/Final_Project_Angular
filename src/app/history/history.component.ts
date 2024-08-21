import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {
  history: any;
  constructor(private moviesService: MoviesService) {}
  ngOnInit() {
    this.history = this.moviesService.history;
    console.log(this.history);
  }
}
