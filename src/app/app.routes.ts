import { Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
  },
  {
    path: 'login',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MovieListComponent,
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
  },
  {
    path: 'movies/booktickets/:id',
    component: BookticketComponent,
  },

  {
    path: 'movies/booktickets/final/:id',
    component: TransactionComponent,
  },
];
