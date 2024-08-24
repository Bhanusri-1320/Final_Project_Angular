import { Injectable } from '@angular/core';
// const API = 'http://localhost:4000';
const API = 'https://final-prj-node-2.onrender.com';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userName: any;
  loginSuccess: any = false;
  constructor() {}
  createUser(credentials: any) {
    return fetch(`${API}/user/signup`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
  loginUser(credentials: any) {
    this.userName = credentials.userName;
    console.log(this.userName);
    return fetch(`${API}/user/login`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
}
