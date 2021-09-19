import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/Entidades/usuarios';
import { UsersService } from 'src/app/Servicios/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuarios[] = [];

  formularioLogin = new FormGroup({
    email: new FormControl("", Validators.required),
    pass: new FormControl('', Validators.required),
  });


  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.ObtenerUsuarioUnico("").subscribe(
      resp => this.usuario = resp
      
    );
  }


  login() {

    var pass = this.formularioLogin.get("pass")?.value;
    var email = this.formularioLogin.get("email")?.value;

    this.usersService.login(this.usuario, email, pass);

  }

}
