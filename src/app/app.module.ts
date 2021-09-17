import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
     GlobalErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    SweetAlert2Module
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: InterceptorPrincipal, multi: true},
    {provide: ErrorHandler, useClass: GlobalErrorService}],
    bootstrap: [AppComponent]
})
export class AppModule { }
