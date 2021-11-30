import { Component, Input, OnInit, Output } from '@angular/core';
import { AgendaService } from '../_services/agenda.service';
import { FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';
import { formatDate } from '@angular/common';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, ArriendoService, AlertService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {

  form: FormGroup;
  items = this.agendaService.getItems();
  today = new Date();
  holidayList: any = [];
  holidayList1: any = [];
  loading = false;
  submitted = false;
  MatchDates;
  idVehiculo;
  DisabledReserva;
  totaldias = 0;
  despacho = true;
  account = this.accountService.accountValue;
  Sucursal: any = ['GrandCar Las Condes', 'GrandCar Vitacura', 'GrandCar Peñalolen']

  constructor(
    private formBuilder: FormBuilder,
    private agendaService: AgendaService,
    private accountService: AccountService,
    private arriendoService: ArriendoService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    

  }

  convertArrayDates(x) {
    let resultant = [];

    for(let i=0; i>x.length;i++) {
      resultant.push(new Date(x[i]))
    }
    return resultant
  } 

  convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
  }

  arrayMatch(dMarked, dFiltered) {
    //dMarked=this.getDates(new Date("11/26/2021"), new Date("11/27/2021"));
    //console.log(dMarked);
    //console.log(dFiltered);
    var diffDates = dMarked.filter(function(marked){
        return dFiltered.filter(function(filtered){
            return filtered.toDateString() === marked.toDateString()
        }).length == 1
    });

    //var intersections = dMarked.filter(e => dFiltered.indexOf(e) !== -1);

    return diffDates;

  }

  getDates(startDate, endDate) {
    const dates = []
    let currentDate = startDate
    const addDays = function (days) {
      const date = new Date(this.valueOf())
      date.setDate(date.getDate() + days)
      return date
    }
    while (currentDate <= endDate) {
      //dates.push(moment(currentDate).format('DD/MM/YYYY'))
      dates.push(currentDate)
      currentDate = addDays.call(currentDate, 1)
    }
    return dates 
  }

  holidayDateFilter = (d: Date): boolean => {  
    // check if date is holiday
    moment(d);
    if (this.holidayList) {
      return !this.holidayList.find(x => {
        return moment(x).isSame(d, 'day');
      });
    }
  };
  
  checkDespapcho(value:boolean) {
    this.despacho = value;
    if(this.despacho==false){
      this.form.controls.direccion_desp.setValidators([]);
      this.form.controls.direccion_desp.setValue('');
      this.form.controls.nombre_sucursal.setValidators([Validators.required]);  
    } else {
      this.form.controls.direccion_desp.setValue(this.account.domicilio['direccion']);   
      this.form.controls.direccion_desp.setValidators([Validators.required]) 
      //console.log("no requerido")
      this.form.controls.nombre_sucursal.clearValidators();
      this.form.controls.nombre_sucursal.setValue('');
      this.form.controls.nombre_sucursal.updateValueAndValidity();
    }
  }

  DatesMatch(startDate, endDate, holidayList) {
    var result = this.arrayMatch(this.getDates(startDate, endDate),  holidayList)
    if(result.length==0) {
      return false
    } else  {
      return true
    }
  }

  isDisabled() {
    if(this.form.get('fecha_salida').value!=null) {
      var start = this.form.get('fecha_salida').value['_d'];
    } else {
      return this.MatchDates=true
    }
    if(this.form.get('fecha_retorno').value!=null) {
      var end = this.form.get('fecha_retorno').value['_d'];
    } else {
      return this.MatchDates=true
    }
    this.MatchDates = this.DatesMatch(start,end,this.holidayList.map(x => new Date(x)))
    return this.MatchDates
  }

   // Choose city using select dropdown
  changeSucursal(e) {
    this.form.controls.nombre_sucursal.setValue(e.target.value, {
      onlySelf: true
    })
  }

  ListaFecha() {
    this.arriendoService.disabledDays(this.idVehiculo).subscribe(x => { this.holidayList = x })
    this.holidayList.map(x => new Date(x))
  }
  
  ngOnInit(): void {
    
      this.ListaFecha();

      if(this.items.length==0){
        this.router.navigate(['../vehiculos'], { relativeTo: this.route });
      } else {
        this.idVehiculo = this.items[0]['id'];
      }
      this.form = this.formBuilder.group({
        fecha_salida: ['', Validators.required],
        fecha_retorno: ['', Validators.required],
        hora_salida: ['', Validators.required],
        despacho: [this.despacho, Validators.required],
        direccion_desp: [this.account.domicilio['direccion'], Validators.required],
        nombre_sucursal: [''],
        accountId: [this.account.id, Validators.required],
        vehiculoId: [this.idVehiculo, Validators.required]
      });

      //console.log(this.despacho)
      //console.log(this.idVehiculo)

      
      // Usage
      //let arr1 = this.getDates(new Date("11/19/2021"), new Date("11/30/2021"));
      //var day = (moment(new Date("11/19/2021"))).format('DD/MM/YYYY');
      //console.log(day)
      //console.log(arr1)
      //let arr2 = this.holidayList;
      //console.log(arr2)
      //console.log(this.arrayMatch(arr1, arr2));

      //const dates = this.arrayMatch(this.getDates(new Date("11/19/2021"), new Date("11/30/2021")),  this.holidayList);
      //console.log(dates)

      //console.log(this.holidayList)
      //console.log(this.convertArrayDates(this.holidayList))
      //var result = this.arrayMatch(this.getDates(new Date("11/29/2021"), new Date("11/30/2021")), this.holidayList)
      //console.log("result:" + result)
      
  }

  get f() { return this.form.controls; }

  onClose(){

    if(this.form.get('fecha_salida').value!=null) {
      var start = this.form.get('fecha_salida').value['_d'];
    } else {
      return this.MatchDates=true
    }
    if(this.form.get('fecha_retorno').value!=null) {
      var end = this.form.get('fecha_retorno').value['_d'];
    } else {
      return this.MatchDates=true
    }

    //console.log(this.isDisabled());
    this.totaldias = this.getDates(start, end).length
    this.totaldias = this.totaldias * this.items[0].precio_por_dia

    if(this.isDisabled()==true) {
      this.DisabledReserva=true 
    } else {
      this.DisabledReserva=false
    }
    return this.DisabledReserva

  }

  randomString() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  onSubmit() {
    
    //console.log(this.form.value);
    this.submitted = true;

    if(this.isDisabled()==true) {
      //console.log(this.form.valueChanges)
      return;
    } else {
      if (this.form.invalid) {
        return;
      } 
    }

    this.arriendoService.saveArriendo(this.form.value)
    .pipe(first())
    .subscribe({
        next: () => {
            this.alertService.success('Gracias por tu reserva', { keepAfterRouteChange: true });
            //this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: error => {
            this.alertService.error(error);
            this.loading = false;
        }
    });

    //console.log("DateMatch "+ this.MatchDates)
    //console.log(this.submitted)
  }
  
}
