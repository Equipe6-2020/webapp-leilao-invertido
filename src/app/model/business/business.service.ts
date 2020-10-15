
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../config/config.service';
import { Business } from './business';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface GetAllPayload {
    pageIndex: number;
    pageSize: number;
}

@Injectable()
export class BusinessService {

    constructor(private configService: ConfigService,
        private http: HttpClient) {
    }

    getAll(getAllPayload: GetAllPayload): Observable<Business[]> {
        return this.http.post<Business[]>(`${this.configService.getServerUrl()}/business/get-all`, getAllPayload);
    }

    create(business: Business) {
        return this.http.post<Business[]>(`${this.configService.getServerUrl()}/business`, business);
    }

}