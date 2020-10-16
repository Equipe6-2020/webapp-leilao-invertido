import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {

    private user: User;

    public setUser(user: User) {
        this.user = user;
    }

    public getUser(): User{
        return this.user;
    }

}