
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../config/config.service';
import { Offer } from './offer';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface GetAllPayload {
    pageIndex: number;
    pageSize: number;
}

@Injectable()
export class OfferService {

    constructor(private configService: ConfigService,
        private http: HttpClient) {
    }

    getAll(getAllPayload: GetAllPayload): Observable<Offer[]> {
        return this.http.post<Offer[]>(`${this.configService.getServerUrl()}/offer/get-all`, getAllPayload);
    }

    create(business: Offer) {
        return this.http.post<Offer[]>(`${this.configService.getServerUrl()}/offer`, business);
    }

}