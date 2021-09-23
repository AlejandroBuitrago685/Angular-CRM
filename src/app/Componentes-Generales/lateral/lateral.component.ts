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
  Empresa = environment.empresa;
  NombreUsuario = sessionStorage.getItem("nameSession");
  Ruta = this.router.url;

  constructor(private router: Router, private userservice: UsersService) {
    
  }
 
  ngOnInit(): void {

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
        sessionStorage.removeItem("nameSession");
        this.router.navigate(["/login"]);
      }
    })

  }

}
