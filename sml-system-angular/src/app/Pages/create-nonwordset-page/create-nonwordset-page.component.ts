import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-nonwordset-page',
  templateUrl: './create-nonwordset-page.component.html',
  styleUrl: './create-nonwordset-page.component.scss'
})
export class CreateNonwordsetPageComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
