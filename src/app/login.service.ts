import { Injectable } from '@angular/core';
const API = 'http://localhost:4000';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  createUser(credentials: any) {
    return fetch(`${API}/user/signup`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        // roleId: localStorage.getItem('roleId') as string,
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
  loginUser(credentials: any) {
    return fetch(`${API}/user/login`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
}
