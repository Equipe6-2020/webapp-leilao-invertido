import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../model/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loading: boolean = false
  wrongCredentials: boolean = false
  sent: boolean = false

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private userService: UserService,
    private router: Router) {

  }

  ngOnInit(): void {

  }

  submit() {
    const user = this.form.value;
    console.log('Submitting', user, JSON.stringify(user));
    this.loading = true;
    this.sent = false;
    this.userService.login(user).subscribe((data: any) => {
      this.loading = false;
      this.sent = true;
      console.log('response', data);
      if (data == null) {
        this.wrongCredentials = true;
      } else {
        this.userService.setUser(data);
        this.router.navigate(['/dashboard']);
      }
    });
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

}
