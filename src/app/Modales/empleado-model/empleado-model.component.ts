import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import * as moment from 'moment';
import { Empleado } from 'src/app/Entidades/empleado';
import { Usuarios } from 'src/app/Entidades/usuarios';
import { EmpleadosService } from 'src/app/Servicios/empleados.service';
import { DetalleEmpleadoModelComponent } from '../detalle-empleado-model/detalle-empleado-model.component';

@Component({
  selector: 'app-empleado-model',
  templateUrl: './empleado-model.component.html',
  styleUrls: ['./empleado-model.component.css']
})
export class EmpleadoModelComponent implements OnInit {

  @Input()
  empleado: Empleado = new Empleado();

  fechaFormateada = ""
  departamentos: any = [];
  nombreDepartamentos: any = [];


  constructor(private dialog: MatDialog, private EmpleadoService:EmpleadosService) { }

  ngOnInit(): void {
    this.fechaFormateada = moment(this.empleado.fecha_alta).format("L");


    this.EmpleadoService.ObtenerDepartamentos(this.empleado.id).subscribe(
      resp => {this.departamentos = resp


     for(let i in this.departamentos){
          this.nombreDepartamentos.push(this.departamentos[i].nombre_dep)
       }
      }
    );


  }

  AbrirDetalle(){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      nombre : this.empleado.nombre,
      apellidos : this.empleado.apellidos,
      email : this.empleado.email,
      fecha_alta : this.fechaFormateada,
      calle : this.empleado.calle,
      localidad : this.empleado.localidad,
      provincia : this.empleado.provincia,
      cp : this.empleado.cp,
      telefono : this.empleado.telefono,
      dni : this.empleado.dni,
      departamentos : this.departamentos
    }
    this.dialog.open(DetalleEmpleadoModelComponent, dialogConfig);
    //console.log(palabra);
  }

}
