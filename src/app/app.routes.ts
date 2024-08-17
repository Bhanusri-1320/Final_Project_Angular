import { Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { MovieListComponent } from './movie-list/movie-list.component';

export const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
  },
  {
    path: 'movies',
    component: MovieListComponent,
  },
];
