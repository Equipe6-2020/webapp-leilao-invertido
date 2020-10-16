import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/model/user/user.service';
import { User } from 'src/app/model/user/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  user: User

  constructor(private userService: UserService) {
    this.user = userService.getUser();
  }

  ngOnInit(): void {
  }

}
