import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrl: './create-account-page.component.scss'
})
export class CreateAccountPageComponent {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['']);
  }
}
