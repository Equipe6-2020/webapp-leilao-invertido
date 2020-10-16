
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../config/config.service';
import { NaturalPerson } from './natural-person';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Purchase } from '../purchase/purchase';
import { UserService } from '../user/user.service';

export interface GetAllPayload {
    pageIndex: number;
    pageSize: number;
}

@Injectable()
export class NaturalPersonService {

    constructor(private configService: ConfigService,
        private userService: UserService,
        private http: HttpClient) {
    }

    getAll(getAllPayload: GetAllPayload): Observable<NaturalPerson[]> {
        return this.http.post<NaturalPerson[]>(`${this.configService.getServerUrl()}/naturalperson/get-all`, getAllPayload);
    }

    create(naturalPerson: NaturalPerson) {
        return this.http.post<NaturalPerson[]>(`${this.configService.getServerUrl()}/naturalperson`, naturalPerson);
    }

    getAllPurchases(getAllPayload: GetAllPayload) {
        const options = { headers: this.userService.getAuthorizationHeader() };
        return this.http.post<Purchase[]>(`${this.configService.getServerUrl()}/naturalperson/get-all-purchase`, getAllPayload, options);
    }

}