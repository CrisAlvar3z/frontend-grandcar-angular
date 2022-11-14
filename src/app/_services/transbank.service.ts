import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Arriendo } from '@app/_models';

const baseUrl = `${environment.apiUrl}/transbank`;

@Injectable({ providedIn: 'root' })
export class TransbankService {
    constructor(
        private http: HttpClient
    ) {}

    create(idvehiculo: any) {
        return this.http.get(`${baseUrl}/create/${idvehiculo}`);
    }
}
