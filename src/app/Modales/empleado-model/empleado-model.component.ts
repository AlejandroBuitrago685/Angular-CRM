import { Component, Input, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/Entidades/usuarios';
import { UsersService } from 'src/app/Servicios/users.service';

@Component({
  selector: 'app-empleado-model',
  templateUrl: './empleado-model.component.html',
  styleUrls: ['./empleado-model.component.css']
})
export class EmpleadoModelComponent implements OnInit {

  @Input()
  empleado: Usuarios = new Usuarios();

  constructor(private serviceUser:UsersService) { }

  ngOnInit(): void {
  }

}
