import { Injectable } from '@angular/core';
import { User } from './user';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../../config/config.service';

@Injectable()
export class UserService {

    private user: User;

    constructor(private configService: ConfigService,
        private http: HttpClient) {

    }

    public login(user: User): Observable<User> {
        return this.http.post<User>(`${this.configService.getSsoServerUrl()}/User/login`, user);
    }

    public setUser(user: User) {
        this.user = user;
        localStorage.setItem("user", JSON.stringify(this.user));
    }

    public getUser(): User{
        if (this.user == null) {
            const user: User = JSON.parse(localStorage.getItem("user"));
            return user;
        }
        return this.user;
    }

    public logout() {
        localStorage.removeItem("user");
    }

    public getAuthorizationHeader() {
        return new HttpHeaders({'Authorization': `Bearer ${this.getUser().accessToken}` });
    }

}