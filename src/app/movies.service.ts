import { Injectable } from '@angular/core';

const API = 'https://669a42939ba098ed61fef789.mockapi.io/';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}
  getAllMoviesP(): Promise<any> {
    return fetch(`${API}/MoviesList`).then((res) => res.json());
  }
}
