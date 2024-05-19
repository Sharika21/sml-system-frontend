import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-manual-page',
  templateUrl: './user-manual-page.component.html',
  styleUrl: './user-manual-page.component.scss'
})
export class UserManualPageComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
