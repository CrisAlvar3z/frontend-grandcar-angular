import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, finalize } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Arriendo } from '@app/_models';
import { Direccion } from '@app/_models';
import { Observable} from 'rxjs';
import { mergeMap } from 'rxjs/operators'

const baseUrl = `${environment.apiUrl}/arriendos`;

@Injectable({ providedIn: 'root' })
export class ArriendoService {
    constructor(
        private http: HttpClient
    ) {}

    saveArriendo(arriendo: Arriendo) {
        return this.http.post(`${baseUrl}/savearriendo`, arriendo);
    }
    
    disabledDays(id) {
        return this.http.get(`${baseUrl}/${id}`);
    }
}
