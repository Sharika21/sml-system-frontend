import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-sml-page',
  templateUrl: './about-sml-page.component.html',
  styleUrl: './about-sml-page.component.scss'
})
export class AboutSmlPageComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
