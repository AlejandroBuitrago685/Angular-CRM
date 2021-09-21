import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuarios } from '../Entidades/usuarios';
import { UsersService } from '../Servicios/users.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  usuarios: Usuarios[] = [];

  constructor(private loginService: UsersService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    var tokens = [];
    var tokenActual = sessionStorage.getItem("token") || "";

    this.loginService.ObtenerUsuarios().subscribe(
      resp => this.usuarios = resp
    )

    for (let i in this.usuarios) {
      tokens.push(this.usuarios[i].token);
    }

    if (tokens.includes(tokenActual)) {
      return true;
    }


    else {
      this.router.navigate(["/login"]);
      return false;
    }

  }

}
