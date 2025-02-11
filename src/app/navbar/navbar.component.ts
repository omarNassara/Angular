import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean = false;

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next: (userData) => {
        this.isLogin = userData != null; 
      }
    });
  }

  logout() {
    localStorage.removeItem('userToken'); 
    this._AuthService.saveUserData();
    this._Router.navigate(['/login']); 
  }
}
