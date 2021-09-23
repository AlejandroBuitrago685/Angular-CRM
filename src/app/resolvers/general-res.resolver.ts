import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { UsersService } from '../Servicios/users.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralResResolver implements Resolve<any> {

  constructor( private DBService:UsersService){}

  resolve(route: ActivatedRouteSnapshot) {
    var token = sessionStorage.getItem('token') || '';
    return this.DBService.ObtenerUsuarioPorToken(token).pipe(
      catchError(error => {
          alert("Ha ocurrido un error inesperado")
          console.log(error)
          return of()
      })
    );
  }


}
