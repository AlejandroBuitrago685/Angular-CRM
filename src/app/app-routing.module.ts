import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalErrorComponent } from './Paginas/global-error/global-error.component';
import { LoginComponent } from './Paginas/login/login.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: 'error/:error', component:  GlobalErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
