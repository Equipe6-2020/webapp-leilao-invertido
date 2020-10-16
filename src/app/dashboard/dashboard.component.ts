import { Component, OnInit } from '@angular/core';
import { UserService } from '../model/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
