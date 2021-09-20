import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/Entidades/usuarios';
import { UsersService } from 'src/app/Servicios/users.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

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

    Swal.fire({
      title: '¿Cerrar sesión?',
      text: "¿Está seguro de que desea cerrar la sesión?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar sesión',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("token");
        this.router.navigate([""]);
      }
    })

  }
}
