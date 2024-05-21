import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginForm: FormGroup = new FormGroup(
    {
      email: new FormControl<string | null>(null, Validators.required),
      password: new FormControl<string | null>(null, Validators.required)
    }
  )
  
  constructor(
    private router: Router, 
    private loginService: LoginService
  ) { }

  signIn() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    if (email && password) {
      this.loginService.loginUser(email, password).subscribe({
        next: (response) => {
          // Handle successful authentication
          if (response.message == 'Login success') {
            console.log('Login success', response);
            this.router.navigate(['/home']);
          }

        },
        error: (err) => {
          // Handle authentication error
          console.error('Login failed', err);
        }
      });
    } else {
      console.error('Email and password must be provided');
    }
  }

  signUp() {
    this.router.navigate(['/create-account']);
  }
}
