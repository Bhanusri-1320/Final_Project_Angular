import { Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { TransactionComponent } from './transaction/transaction.component';

export const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
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
    path: 'movies/booktickets/final',
    component: TransactionComponent,
  },
];
