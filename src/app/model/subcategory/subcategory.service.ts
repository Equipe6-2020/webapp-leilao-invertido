
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../config/config.service';
import { SubCategory } from './subcategory';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface GetAllPayload {
    pageIndex: number;
    pageSize: number;
}

@Injectable()
export class SubcategoryService {

    constructor(private configService: ConfigService,
        private http: HttpClient) {
    }

    getAll(getAllPayload: GetAllPayload): Observable<SubCategory[]> {
        return this.http.post<SubCategory[]>(`${this.configService.getServerUrl()}/subcategory/get-all`, getAllPayload);
    }

}