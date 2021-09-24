import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Entidades/empleado';
import { Usuarios } from 'src/app/Entidades/usuarios';
import { RegistroEmpleadosModalComponent } from 'src/app/Modales/registro-empleados-modal/registro-empleados-modal.component';
import { EmpleadosService } from 'src/app/Servicios/empleados.service';
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
  ListaEmpleados:Empleado[] = [];
  public page:number;

  constructor(private dialog: MatDialog,private router: Router, private userservice: UsersService, private empleadosService:EmpleadosService) {}

 
  ngOnInit(): void {
    this.userservice.ObtenerUsuarioPorToken(this.token).subscribe((resp) => {
      this.NombreUsuario = resp[0].nombre;
    });

    this.empleadosService.ObtenerEmpleados().subscribe(
      resp => this.ListaEmpleados = resp
    )
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
  }
}
