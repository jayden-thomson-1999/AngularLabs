import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  private isLogedIn: boolean;
  private user;

  constructor(private router: Router ) {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    if (this.user === null) {
      this.router.navigateByUrl('/login');
    } else {
      this.isLogedIn = true;
    }
  }

  ngOnInit() {
  }

}
