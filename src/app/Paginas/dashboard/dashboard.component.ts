import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/Entidades/usuarios';
import { UsersService } from 'src/app/Servicios/users.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  Empresa = environment.empresa;
  token = sessionStorage.getItem('token') || '';
  NombreUsuario = '';

  constructor(private router: Router, private userservice: UsersService) {}

  ngOnInit(): void {
    this.userservice.ObtenerUsuarioPorToken(this.token).subscribe((resp) => {
      this.NombreUsuario = resp[0].nombre;
    });
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
