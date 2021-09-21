import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-empleados-modal',
  templateUrl: './registro-empleados-modal.component.html',
  styleUrls: ['./registro-empleados-modal.component.css']
})
export class RegistroEmpleadosModalComponent implements OnInit {

  constructor() { }

  FormularioRegistro = new FormGroup({
    nombre: new FormControl("", Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  AddEmpleado(){
    console.log(this.FormularioRegistro.get("nombre")?.value)
  }

}
