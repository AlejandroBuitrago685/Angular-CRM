import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Empleado } from 'src/app/Entidades/empleado';

@Component({
  selector: 'app-detalle-empleado-model',
  templateUrl: './detalle-empleado-model.component.html',
  styleUrls: ['./detalle-empleado-model.component.css']
})
export class DetalleEmpleadoModelComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Empleado) { }

  nombre = this.data.nombre;
  apellidos = this.data.apellidos;
  dni = this.data.dni;
  email = this.data.email;
  telefono = this.data.telefono;
  calle = this.data.calle;
  localidad = this.data.localidad;
  provincia = this.data.provincia;
  fecha = this.data.fecha_alta;
  cp = this.data.cp;
  departamentos = this.data.departamentos;

  ngOnInit(): void {
  }


}
