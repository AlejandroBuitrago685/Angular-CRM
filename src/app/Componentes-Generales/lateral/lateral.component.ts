import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Servicios/users.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent implements OnInit {
  static nombreprueba="";
  Empresa = environment.empresa;
  token = sessionStorage.getItem('token') || '';
  NombreUsuario = 'Cargando...';
  Ruta = this.router.url;

  constructor(private router: Router, private userservice: UsersService) {
    
  }

 
  ngOnInit(): void {
    this.userservice.ObtenerUsuarioPorToken(this.token).subscribe((resp) => {
      this.NombreUsuario = resp[0].nombre;
      LateralComponent.nombreprueba=this.NombreUsuario;
    });
    
  }

  get staticNombrePrueba() {
    return LateralComponent.nombreprueba;
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
        this.router.navigate(["/login"]);
      }
    })

  }

}
