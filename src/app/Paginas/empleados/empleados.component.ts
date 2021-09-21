import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegistroEmpleadosModalComponent } from 'src/app/Modales/registro-empleados-modal/registro-empleados-modal.component';
import { UsersService } from 'src/app/Servicios/users.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  Empresa = environment.empresa;
  token = sessionStorage.getItem('token') || '';
  NombreUsuario = '';
  Ruta = this.router.url;

  constructor(private dialog: MatDialog,private router: Router, private userservice: UsersService) {}

 
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

  AbrirRegistro(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(RegistroEmpleadosModalComponent, dialogConfig);
    //console.log(palabra); 
  }
}
