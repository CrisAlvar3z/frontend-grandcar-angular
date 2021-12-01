import { Component, OnInit } from '@angular/core';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent {
    account = this.accountService.accountValue;
    direccion = this.account.domicilio['direccion'];
    constructor(private accountService: AccountService) {}
}


