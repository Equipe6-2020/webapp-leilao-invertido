
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../config/config.service';
import { Purchase } from './purchase';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface GetAllPayload {
    pageIndex: number;
    pageSize: number;
}

@Injectable()
export class PurchaseService {

    constructor(private configService: ConfigService,
        private http: HttpClient) {
    }

    getAll(getAllPayload: GetAllPayload): Observable<Purchase[]> {
        return this.http.post<Purchase[]>(`${this.configService.getServerUrl()}/purchase/get-all`, getAllPayload);
    }

    create(purchase: Purchase) {
        return this.http.post<Purchase[]>(`${this.configService.getServerUrl()}/purchase`, purchase);
    }

    get(id: number) {
        return this.http.get<Purchase>(`${this.configService.getServerUrl()}/purchase/${id}`);
    }

}