import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  constructor(private router: Router) {}

  navigateToAboutSml() {
    this.router.navigate(['/about-sml']);
  }

  navigateToUserManual() {
    this.router.navigate(['/user-manual']);
  }

  navigateToCreateNonwordSet() {
    this.router.navigate(['/create-nonword-set']);
  }
}
