import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { MenuComponent } from './_shared/menu/menu.component';
import { SidebarfiltroComponent } from './_shared/sidebarfiltro/sidebarfiltro.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingspinnerComponent } from './_shared/loadingspinner/loadingspinner.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor, ErrorInterceptor, appInitializer } from './_helpers';
import { AccountService,ArriendoService } from './_services';
import { AlertComponent } from './_components';
import { FooterComponent } from './_shared/footer/footer.component';
import { InicioComponent } from './_shared/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    MenuComponent,
    SidebarfiltroComponent,
    CheckoutComponent,
    LoadingspinnerComponent,
    FooterComponent,
    InicioComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatInputModule,
    NgbPaginationModule, 
    NgbAlertModule,
    
  ],
  providers: [
    ArriendoService,
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'es-CL' }
    // provider used to create fake backend
    //fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
