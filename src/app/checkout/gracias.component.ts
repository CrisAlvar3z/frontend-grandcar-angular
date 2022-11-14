import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './gracias.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class GraciasComponent implements OnInit {

  loading = false;
  params;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    

  }
  
  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        this.params = params
        console.log(params); // { orderby: "price" }
      }
      );
  }


}
