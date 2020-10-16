import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  
    private SERVER_URL = "http://localhost:5001/api";

    private SSO_SERVER_URL = "http://localhost:5002/api";

    constructor(private http: HttpClient) { }

    getServerUrl() {
        return this.SERVER_URL;
    }

    getSsoServerUrl() {
        return this.SSO_SERVER_URL;
    }

}