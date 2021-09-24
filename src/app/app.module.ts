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
import { EmpleadosComponent } from './Paginas/empleados/empleados.component';
import { RegistroEmpleadosModalComponent } from './Modales/registro-empleados-modal/registro-empleados-modal.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { CuerpoComponent } from './Componentes-Generales/cuerpo/cuerpo.component';
import { RaizComponent } from './Paginas/raiz/raiz.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { EmpleadoModelComponent } from './Modales/empleado-model/empleado-model.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DetalleEmpleadoModelComponent } from './Modales/detalle-empleado-model/detalle-empleado-model.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
     GlobalErrorComponent,
     DashboardComponent,
     EncabezadoComponent,
     LateralComponent,
     EmpleadosComponent,
     RegistroEmpleadosModalComponent,
     CuerpoComponent,
     RaizComponent,
     EmpleadoModelComponent,
     DetalleEmpleadoModelComponent
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
    MatBadgeModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    NgxPaginationModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: InterceptorPrincipal, multi: true},
    {provide: ErrorHandler, useClass: GlobalErrorService}],
    bootstrap: [AppComponent]
})
export class AppModule { }
