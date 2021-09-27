import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/Entidades/empleado';
import { EmpleadosService } from 'src/app/Servicios/empleados.service';

@Component({
  selector: 'app-registro-empleados-modal',
  templateUrl: './registro-empleados-modal.component.html',
  styleUrls: ['./registro-empleados-modal.component.css']
})
export class RegistroEmpleadosModalComponent implements OnInit {

  constructor(private EmpleadoService:EmpleadosService) { }

  FormularioRegistro = new FormGroup({
    nombre: new FormControl("", Validators.required),
    apellidos: new FormControl("", Validators.required),
    telefono: new FormControl("", Validators.required),
    dni: new FormControl("", Validators.required),
    fecha_alta: new FormControl("", Validators.required),
    calle: new FormControl("", Validators.required),
    provincia: new FormControl('', Validators.required),
    localidad: new FormControl('', Validators.required),
    cp: new FormControl('', Validators.required),
    departamentos_id: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email)

  });

  ngOnInit(): void {
  }

  AddEmpleado(){
    var nombre = this.FormularioRegistro.get("nombre")?.value;
    var apellidos = this.FormularioRegistro.get("apellidos")?.value;
    var telefono = this.FormularioRegistro.get("telefono")?.value;
    var dni = this.FormularioRegistro.get("dni")?.value;
    var email = this.FormularioRegistro.get("email")?.value;
    var fecha_alta = this.FormularioRegistro.get("fecha_alta")?.value;
    var calle = this.FormularioRegistro.get("calle")?.value;
    var provincia = this.FormularioRegistro.get("provincia")?.value;
    var localidad = this.FormularioRegistro.get("localidad")?.value;
    var cp = this.FormularioRegistro.get("cp")?.value;
    var departamentos_id = this.FormularioRegistro.get("departamentos_id")?.value;


    var empleado = new Empleado();
    empleado.nombre = nombre;
    empleado.apellidos = apellidos;
    empleado.telefono = telefono;
    empleado.email = email;
    empleado.dni = dni;
    empleado.fecha_alta = fecha_alta;
    empleado.calle = calle;
    empleado.provincia = provincia;
    empleado.localidad = localidad;
    empleado.cp = cp;
    empleado.departamentos_id = departamentos_id;


    this.EmpleadoService.AddEmpleado(empleado).subscribe(
      resp => alert("SE HA CREADO EL EMPLEADO")
    );
    (error: any) => {
      console.log(error);
    }

  }

}
