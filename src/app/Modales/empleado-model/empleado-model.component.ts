import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import * as moment from 'moment';
import { Empleado } from 'src/app/Entidades/empleado';
import { Usuarios } from 'src/app/Entidades/usuarios';
import { UsersService } from 'src/app/Servicios/users.service';
import { DetalleEmpleadoModelComponent } from '../detalle-empleado-model/detalle-empleado-model.component';

@Component({
  selector: 'app-empleado-model',
  templateUrl: './empleado-model.component.html',
  styleUrls: ['./empleado-model.component.css']
})
export class EmpleadoModelComponent implements OnInit {

  @Input()
  empleado: Empleado = new Empleado();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  AbrirDetalle(){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      nombre : this.empleado.nombre,
      apellidos : this.empleado.apellidos,
      email : this.empleado.email,
      fecha_alta : this.empleado.fecha_alta,
      calle : this.empleado.calle,
      localidad : this.empleado.localidad,
      provincia : this.empleado.provincia,
      cp : this.empleado.cp,
      telefono : this.empleado.telefono,
      dni : this.empleado.dni
    }
    this.dialog.open(DetalleEmpleadoModelComponent, dialogConfig);
    //console.log(palabra); 
  }

}
