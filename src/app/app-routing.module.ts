import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './Guards/login.guard';
import { DetalleEmpleadoModelComponent } from './Modales/detalle-empleado-model/detalle-empleado-model.component';
import { DashboardComponent } from './Paginas/dashboard/dashboard.component';
import { EmpleadosComponent } from './Paginas/empleados/empleados.component';
import { GlobalErrorComponent } from './Paginas/global-error/global-error.component';
import { LoginComponent } from './Paginas/login/login.component';
import { RaizComponent } from './Paginas/raiz/raiz.component';
import { GeneralResResolver } from './resolvers/general-res.resolver';

const routes: Routes = [
  {path: "", component: RaizComponent, resolve:{users: GeneralResResolver}, /*canActivate:[LoginGuard]*/
    children:[
      {path: "dashboard", component: DashboardComponent}, //*, canActivate:[LoginGuard]} * //
      {path: "empleados", component: EmpleadosComponent},
      {path: "calendario", component: DashboardComponent},
      {path: "facturacion", component: DashboardComponent}
    ]},
  {path: "login", component: LoginComponent},
  {path: "test", component: DetalleEmpleadoModelComponent},
  {path: 'error/:error', component:  GlobalErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
