import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Usuarios } from '../Entidades/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  RutaUsuarios = environment.RutaUsers;

  constructor(private http:HttpClient) { }


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
      console.log("SUCESS LOGIN");
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
  ObtenerUsuarios(){
    return this.http.get(this.RutaUsuarios + "/users");
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

}
