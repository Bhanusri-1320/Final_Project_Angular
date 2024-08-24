import { Injectable } from '@angular/core';

const API = 'https://final-prj-node-2.onrender.com';
@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor() {}
  addHistory(data: any) {
    console.log(data);
    return fetch(`${API}/history/${data.userName}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
  getHistory(data: any) {
    console.log(data);
    return fetch(`${API}/history/${data}`).then((data) => data.json());
  }
  // createUser(credentials: any) {
  //   return fetch(`${API}/user/signup`, {
  //     method: 'POST',
  //     body: JSON.stringify(credentials),
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   }).then((res) => res.json());
  // }
  // loginUser(credentials: any) {
  //   return fetch(`${API}/user/login`, {
  //     method: 'POST',
  //     body: JSON.stringify(credentials),
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   }).then((res) => res.json());
  // }
}
