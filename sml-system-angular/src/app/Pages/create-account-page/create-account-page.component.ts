import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrl: './create-account-page.component.scss'
})
export class CreateAccountPageComponent {
  userForm: FormGroup = new FormGroup(
    {
      username: new FormControl<string | null>(null),
      email: new FormControl<string | null>(null),
      password: new FormControl<string | null>(null)
    }
  )
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  navigateToLogin() {
    const username = this.userForm.get('username')?.value;
    const email = this.userForm.get('email')?.value;
    const password = this.userForm.get('password')?.value;

    if (username && email && password) {
      this.userService.saveUser(username, email, password).subscribe({
        next: () => {
          console.log('User saved successfully');
          this.router.navigate(['']);
        },
        error: (err) => {
          console.error('Error saving user:', err);
        }
      });
    } else {
      console.error('Username, email, and password are required');
    }
  }

}

