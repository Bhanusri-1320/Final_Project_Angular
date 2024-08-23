import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss',
})
export class TransactionComponent {
  selectedData: any;
  constructor(private moviesService: MoviesService) {}
  ngOnInit() {
    this.selectedData = this.moviesService.getSelectedData();
    console.log(this.selectedData);
  }
}
