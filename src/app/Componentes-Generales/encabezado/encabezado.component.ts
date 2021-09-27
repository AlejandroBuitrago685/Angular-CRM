import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { LateralComponent } from '../lateral/lateral.component';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  Ruta = this.router.url;

  constructor(private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
   }

  ngOnInit(): void {
  }


  escribe(texto:String){
    console.log(texto);
  }

}
