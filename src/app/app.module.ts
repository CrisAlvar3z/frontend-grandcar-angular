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

import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor, ErrorInterceptor, appInitializer } from './_helpers';
import { AccountService } from './_services';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    MenuComponent,
    SidebarfiltroComponent,
    CheckoutComponent,
    LoadingspinnerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    //fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
