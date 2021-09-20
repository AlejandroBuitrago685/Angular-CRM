import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Usuarios } from '../Entidades/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  RutaUsuarios = environment.RutaUsers;

  constructor(private http:HttpClient, private router:Router) { }


  login(usuarios:Usuarios[],email:string, pass:string){
    this.ObtenerUsuarioUnico(email).subscribe(
      resp => usuarios= resp

    );

    var password = "";
    var token = "";
    for(let i in usuarios){
      password = usuarios[i].password;
      token = usuarios[i].token;
    }

    if(password == pass){
      this.router.navigate(["/dashboard"]);
      sessionStorage.setItem("token", token);
    }
    else{
      Swal.fire(
        'Datos erróneos',
        'Usuario o contraseña incorrectos',
        'error'
      )
    }
  }

  //Obtener todos los usuarios
  ObtenerUsuarios():Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.RutaUsuarios + "/users");
  }

  //Obtener un unico usuario
  ObtenerUsuarioUnico(email:string):Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.RutaUsuarios+"/users/" + email);
  }

  //Añadir usuario
  AddUser(usuario:Usuarios){
    return this.http.post(this.RutaUsuarios+"/users", usuario);
  }

  //Eliminar Usuario
  DeleteUser(email:string){
    return this.http.delete(this.RutaUsuarios+"/users/" + email);
  }

  //Modificar usuario
  ModifyUser(id:string, usuario:Usuarios){
    return this.http.put(this.RutaUsuarios+"/users/" + id, usuario);
  }

  //Obtener nombre de usuario por token
  ObtenerUsuarioPorToken(token:string):Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.RutaUsuarios+"/users/token/" + token);
  }
}
