import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Paginas/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Componentes-Generales/footer/footer.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { GlobalErrorComponent } from './Paginas/global-error/global-error.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorPrincipal } from './Interceptores/interceptor-principal';
import { GlobalErrorService } from './Interceptores/Global-Error-Handling/global-error.service';
import { DashboardComponent } from './Paginas/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EncabezadoComponent } from './Componentes-Generales/encabezado/encabezado.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LateralComponent } from './Componentes-Generales/lateral/lateral.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
     GlobalErrorComponent,
     DashboardComponent,
     EncabezadoComponent,
     LateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    SweetAlert2Module,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatBadgeModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: InterceptorPrincipal, multi: true},
    {provide: ErrorHandler, useClass: GlobalErrorService}],
    bootstrap: [AppComponent]
})
export class AppModule { }
