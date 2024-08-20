import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'https://669a42939ba098ed61fef789.mockapi.io/';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  selectedDate: any = {
    theaterName: '',
    timing: '',
    date: '',
  };
  history: any = [];
  TicketsData: any[] = [
    {
      movieId: '1', // Double iSmart
      movieName: 'Double iSmart',
      date: '2024-08-17',
      availableTheaters: [
        {
          theaterName: 'Cinema City',
          address: '123 Main St, Downtown',
        },
        {
          theaterName: 'Galaxy Cinema',
          address: '456 Elm St, Uptown',
        },
      ],
      timings: ['10:00 AM', '1:00 PM', '4:00 PM'],
    },
    {
      movieId: '2', // Naa Saami Ranga
      movieName: 'Naa Saami Ranga',
      date: '2024-08-18',
      availableTheaters: [
        {
          theaterName: 'Silver Screen',
          address: '789 Pine St, Central',
        },
        {
          theaterName: 'Majestic Theaters',
          address: '101 Maple Ave, Westside',
        },
      ],
      timings: ['12:00 PM', '3:00 PM', '6:00 PM'],
    },
    {
      movieId: '3', // Sardar
      movieName: 'Sardar',
      date: '2024-08-19',
      availableTheaters: [
        {
          theaterName: 'Grand Theater',
          address: '202 Oak St, Eastside',
        },
        {
          theaterName: 'Elite Cinemas',
          address: '303 Birch Rd, North',
        },
      ],
      timings: ['2:00 PM', '5:00 PM', '8:00 PM'],
    },
    {
      movieId: '4', // Sci-Fi Saga
      movieName: 'Sci-Fi Saga',
      date: '2024-08-20',
      availableTheaters: [
        {
          theaterName: 'Regal Cinema',
          address: '404 Cedar St, South',
        },
        {
          theaterName: 'Urban Movieplex',
          address: '505 Walnut St, Central',
        },
      ],
      timings: ['11:00 AM', '2:00 PM', '7:00 PM'],
    },
    {
      movieId: '5', // Family Fun
      movieName: 'Family Fun',
      date: '2024-08-21',
      availableTheaters: [
        {
          theaterName: 'Family Theater',
          address: '606 Pine St, Downtown',
        },
        {
          theaterName: 'CineWorld',
          address: '707 Maple Ave, Uptown',
        },
      ],
      timings: ['10:30 AM', '1:30 PM', '4:30 PM'],
    },
  ];
  banners: any = [
    'https://in.bmscdn.com/webin/best-of-2018/best-of-2018-banner.jpg',
    'https://inc42.com/cdn-cgi/image/quality=75/https://asset.inc42.com/2017/10/bookmyshow-flipkart-ecommerce-online-ticketing.jpg',
    'https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/kalki-2898-ad-et00352941-1718275859.jpg',
    'https://bsmedia.business-standard.com/_media/bs/img/article/2017-04/28/full/1493364600-4637.jpg?im=FeatureCrop,size=(826,465)',
    'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202309/ezgif-sixteen_nine_42.jpg?size=948:533',
  ];
  constructor(private http: HttpClient) {}
  getAllMoviesP(): Promise<any> {
    return fetch(`${API}/MoviesList`).then((res) => res.json());
  }
  searchUser(searchTerm: string) {
    return this.http.get(
      `https://669a42939ba098ed61fef789.mockapi.io/MoviesList?search=${searchTerm}`
    );
  }
  getMovieByIdP(id: string) {
    return fetch(`${API}/MoviesList/${id}`).then((res) => res.json());
  }
  getTicketsDataById(id: any) {
    console.log(id);
    const movie = this.TicketsData.find((res) => res.movieId === id); // Use === for strict equality
    console.log(movie);
    return movie;
  }
  getSelectedData() {
    console.log(this.selectedDate);
    this.history.push(this.selectedDate);
    console.log(this.history);
    return this.selectedDate;
  }
  addMovieP(newMovie: any) {
    // this.movies.push(newMovie);
    return fetch(`${API}/Movies`, {
      method: 'POST',
      body: JSON.stringify(newMovie),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  }
}
