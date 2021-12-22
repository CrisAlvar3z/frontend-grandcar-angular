import { Component, OnInit} from '@angular/core';
import { VehiculosService } from '../_services/vehiculos.service';
import { Vehiculo } from 'src/app/_models/vehiculo';
import { Router } from '@angular/router';
import { AgendaService } from '../_services/agenda.service';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})

export class VehiculosComponent implements OnInit {

  show: boolean = true;
  listVehiculos: Vehiculo[] = [];
  parametrosChecked = [];

  constructor
  (
      private vehiculosServ: VehiculosService,
      private router: Router,
      private agendaService: AgendaService
  ) { }
  
  ngOnInit(): void {
    this.obtenerVehiculos();
    this.agendaService.clearAgenda();
  }

  obtenerVehiculos() {
    this.vehiculosServ.getVehiculos().subscribe(data => {
      if(this.parametrosChecked.length==0){
        this.listVehiculos = data;
      } else {
        this.listVehiculos = this.filtro(this.parametrosChecked,data);
      }
      this.show = false;
      //console.log(this.listVehiculos);
    }, error => {
    })
  }
    
  addToAgenda(i: number) {
    this.agendaService.addToAgenda(this.listVehiculos[i]);
    //window.alert('Vehiculo agregado a la agenda');
    console.log(this.agendaService.getItems());
    this.router.navigate(['/checkout']);
  }

  acceptData(data: any[]) {
    this.parametrosChecked = data;
    this.obtenerVehiculos();
  }

  filtro(filtros: any[], vehiculos) {
      return vehiculos.filter(function (el) { return filtros.includes(el.marca); })
  }

//this.listVehiculos.filter(function (el) { return el.marca == this.parametrosChecked; })
}
