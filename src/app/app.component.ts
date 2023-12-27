import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  value: string | undefined;

  [x: string]: any;
  loggedIn: boolean = false;
  currentUser: any = {};
  email: string = ''; // Default email value
  password: string = ''; // Default password value

  login() {
    // Fetch users from JSON file (assuming db.json is in the assets folder)
    fetch('assets/db.json')
      .then((response) => response.json())
      .then((data) => {
        const lowercaseEmail = this.email.toLowerCase(); // Convert input email to lowercase

        const user = data.users.find(
          (u: any) => u.email.toLowerCase() === lowercaseEmail && u.password === this.password
        );

        if (user) {
          this.loggedIn = true;
          this.currentUser = user;
        } else {
          alert('Invalid credentials');
        }
      });
  }

  logout() {
    this.loggedIn = false;
    this.currentUser = {};
    this.email = '';
    this.password = '';
  }
}
 