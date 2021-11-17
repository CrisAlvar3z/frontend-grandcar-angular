import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../_services/agenda.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  items = this.agendaService.getItems();

  constructor(
    private agendaService: AgendaService
  ) { }

  ngOnInit(): void {
    console.log(this.items);
  }

}
