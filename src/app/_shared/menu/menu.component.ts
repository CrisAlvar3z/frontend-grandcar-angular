import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../_services';
import { Account, Role } from '../../_models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  account: Account;
  constructor(private accountService:AccountService) { 
    this.accountService.account.subscribe(x => this.account = x);
  }

  ngOnInit(): void {
  }

  logout() {
    this.accountService.logout();
  }
}
