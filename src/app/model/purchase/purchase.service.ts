
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../../config/config.service';
import { Purchase } from './purchase';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

export interface GetAllPayload {
    pageIndex: number;
    pageSize: number;
}

@Injectable()
export class PurchaseService {

    constructor(private configService: ConfigService,
        private userService: UserService,
        private http: HttpClient) {
    }

    getAll(getAllPayload: GetAllPayload): Observable<Purchase[]> {
        return this.http.post<Purchase[]>(`${this.configService.getServerUrl()}/purchase/get-all`, getAllPayload);
    }

    create(purchase: Purchase) {
        const options = { headers: this.userService.getAuthorizationHeader() };
        return this.http.post<Purchase[]>(`${this.configService.getServerUrl()}/purchase`, purchase, options);
    }

    get(id: number) {
        return this.http.get<Purchase>(`${this.configService.getServerUrl()}/purchase/${id}`);
    }

    accept(purchaseId: number, offerId: number) {
        const options = { headers: this.userService.getAuthorizationHeader() };
        return this.http.post<any>(`${this.configService.getServerUrl()}/purchase/${purchaseId}/acceptance/${offerId}`, null, options);
    }

}