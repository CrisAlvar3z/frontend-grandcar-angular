import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'mis-arriendos.component.html', styleUrls: ['./mis-arriendos.component.scss']})


export class MisArriendosComponent implements OnInit {

    account: any = this.accountService.accountValue;
    firtstime=true
    arriendos = this.account.arriendos
    constructor (private accountService: AccountService, private router:Router) {
        //window.location.reload();
    }
    
    ngOnInit() {
        console.log(this.account)
        if(this.account.arriendos=="" || this.account.arriendos==undefined || this.account.arriendos==null) {
            window.location.reload();
        }
    }
}
