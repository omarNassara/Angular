import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient , private _Router:Router) {
    if(localStorage.getItem('userToken') != null)
    {
      this.saveUserData();
    }
  }

  userData = new BehaviorSubject<any>(null);

  saveUserData() {
    const encodedToken = localStorage.getItem('userToken');
    if (encodedToken) {
      try {
        if (this.isValidJWT(encodedToken)) {
          const decodedToken = jwtDecode(encodedToken);
          this.userData.next(decodedToken);
        } else {
          this.userData.next({}); 
        }
      } catch (error) {
        console.error('Invalid Token:', error);
      }
    } else {
      this.userData.next(null); 
    }
  }

  isValidJWT(token: string): boolean {
    return token.split('.').length === 3;
  }

  signOut()
  {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
  signup(userData: object): Observable<any> {
    return this._HttpClient.post('https://jsonplaceholder.typicode.com/posts', userData);
  }

  signin(userData: object): Observable<any> {
    return this._HttpClient.post('https://jsonplaceholder.typicode.com/posts', userData);
  }
}