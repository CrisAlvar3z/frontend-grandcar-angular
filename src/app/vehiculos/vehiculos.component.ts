import { Component, OnInit} from '@angular/core';
import { VehiculosService } from '../_services/vehiculos.service';
import { Vehiculo } from 'src/app/_models/vehiculo';
import { Router } from '@angular/router';
import { AgendaService } from '../_services/agenda.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})

export class VehiculosComponent implements OnInit {

  show: boolean = true;
  listVehiculos: Vehiculo[] = [];
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
      this.listVehiculos = data;
      this.show = false;
      console.log(this.listVehiculos);
    }, error => {
    })
  }
    
  addToAgenda(i: number) {
    this.agendaService.addToAgenda(this.listVehiculos[i]);
    //window.alert('Vehiculo agregado a la agenda');
    console.log(this.agendaService.getItems());
    this.router.navigate(['/checkout']);
  }

}
