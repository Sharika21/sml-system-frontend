import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  constructor(private router: Router) { }

  signIn() {
    this.router.navigate(['/home']);
  }

  signUp() {
    this.router.navigate(['/create-account']);
  }
}
