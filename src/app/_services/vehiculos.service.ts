import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

const baseUrl = `${environment.apiUrl}/vehiculos`;

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  url = 'http://localhost:4000/vehiculos';

  constructor(private http: HttpClient) { }

  getVehiculos(): Observable<any> {
    return this.http.get(this.url);
  }
  
}
