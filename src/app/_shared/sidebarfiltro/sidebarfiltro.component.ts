import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebarfiltro',
  templateUrl: './sidebarfiltro.component.html',
  styleUrls: ['./sidebarfiltro.component.scss']
})
export class SidebarfiltroComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any[]>();

  parametrosChecked = [];
  constructor() { }

  ngOnInit(): void {

  }

  checkFiltro(event) {
    
    if(event.target.checked==true) {
      this.parametrosChecked.push(event.target.name)
      //console.log(this.parametrosChecked)
    } else {
      const index =  this.parametrosChecked.indexOf(event.target.name);
      this.parametrosChecked.splice(index, 1)
      //console.log(this.parametrosChecked)
    }

    this.newItemEvent.emit(this.parametrosChecked);

  }
}
