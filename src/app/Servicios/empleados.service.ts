import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empleado } from '../Entidades/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  RutaEmpleados = environment.RutaEmpleados;

  constructor(private http:HttpClient, private router:Router) { }


  ObtenerEmpleados():Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.RutaEmpleados + "/all");
  }

  //Obtener un unico Empleado
  ObtenerEmpleadoUnico(email:string):Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.RutaEmpleados + "/" + email);
  }

  //Añadir Empleado
  AddEmpleado(empleado:Empleado){
    return this.http.post(this.RutaEmpleados+"/add", empleado);
  }

  //Eliminar Empleado
  DeleteUser(email:string){
    return this.http.delete(this.RutaEmpleados+"/delete/" + email);
  }

  //Modificar Empleado
  ModifyUser(id:string, empleado:Empleado){
    return this.http.put(this.RutaEmpleados+"/modify/" + id, empleado);
  }

}
