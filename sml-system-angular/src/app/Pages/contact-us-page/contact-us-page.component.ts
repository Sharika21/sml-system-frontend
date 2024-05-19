import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.scss'
})
export class ContactUsPageComponent {
  emailAddressMerwe: string = 'anita.vandermerwe05@gmail.com';
  emailAddressKruger: string = 'esedra.kruger@up.ac.za';

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
