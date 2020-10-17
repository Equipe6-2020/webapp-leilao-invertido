import { Component, OnInit } from '@angular/core';
import { UserService } from '../model/user/user.service';
import { Router } from '@angular/router';
import { User } from '../model/user/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  user: User

  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
