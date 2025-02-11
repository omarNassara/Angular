import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  error: string = '';
  isLoading: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^([A-Z])/)
    ])
  });

  submitLoginForm(loginForm: FormGroup) {
    if (loginForm.invalid) {
      this.error = 'Please fill in all fields correctly.';
      return;
    }

    this.isLoading = true;
    this._AuthService.signin(loginForm.value).subscribe({
      next: (response: any) => {
        this.isLoading = false;

        if (response.id) {
          localStorage.setItem('userToken', 'dummy-token'); 
          this._AuthService.saveUserData(); 
          console.log('User logged in:', response);
          this._Router.navigate(['/home']);
        } else {
          this.error = 'Invalid email or password';
        }
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;
        if (err.status === 400) {
          this.error = 'Bad request, please check your input.';
        } else if (err.status === 401) {
          this.error = 'Unauthorized, please check your credentials.';
        } else {
          this.error = 'An error occurred. Please try again.';
        }
        console.error('Error:', err);
      }
    });
  }

  ngOnInit(): void { 
    this._AuthService.userData.subscribe({
      next: ()=> {
        if(this._AuthService.userData.getValue() != null)
        {
          this._Router.navigate(['/home'])
        }
      }
    });
  }
}
