import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './Guards/login.guard';
import { DashboardComponent } from './Paginas/dashboard/dashboard.component';
import { GlobalErrorComponent } from './Paginas/global-error/global-error.component';
import { LoginComponent } from './Paginas/login/login.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent}, //*, canActivate:[LoginGuard]} * //
  {path: 'error/:error', component:  GlobalErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
