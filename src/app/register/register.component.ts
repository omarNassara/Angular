import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  error: string = '';
  isLoading: boolean = false;

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.required
    ]),
    last_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.required
    ]),
    age: new FormControl(null, [
      Validators.min(16),
      Validators.max(90),
      Validators.required
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^([A-Z])/)
    ])
  });

  submitRegisterForm(registerForm: FormGroup) {
    this.isLoading = true;
    this._AuthService.signup(registerForm.value).subscribe({
      next: (response) => {
        this.isLoading = false;
        // إزالة رسائل الكونسول
        if (response.first_name && response.last_name) {
          this._Router.navigate(['/login']);
        } else {
          this.error = 'Something went wrong during registration';
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.error = 'An error occurred. Please try again.';
      }
    });
  }

  ngOnInit(): void {
  }
  
}
