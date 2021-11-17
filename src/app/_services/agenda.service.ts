import { Injectable } from '@angular/core';
import { Vehiculo } from '@app/_models';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  items: Vehiculo[] = [];

  addToAgenda(vehiculo: Vehiculo) {
    this.items.push(vehiculo);
  }

  getItems() {
    return this.items;
  }

  clearAgenda() {
    this.items = [];
    return this.items;
  }

}
