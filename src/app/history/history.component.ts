import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MatCardModule } from '@angular/material/card';
import { HistoryService } from '../history.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {
  history: any;
  constructor(
    private historyService: HistoryService,
    private loginService: LoginService
  ) {}
  ngOnInit() {
    this.historyService
      .getHistory(this.loginService.userName)
      .then((data) => {
        this.history = data;
        console.log(data);
      })
      .then(() => console.log(this.history));
  }
}
