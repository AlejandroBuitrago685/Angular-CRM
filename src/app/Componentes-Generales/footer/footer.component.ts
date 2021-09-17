import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  nombreEmpresa = environment.nombreEmpresa;

  constructor() { }

  ngOnInit(): void {
  }

  popUpContacto(){
    Swal.fire(`Puede ponerse en contacto con nosotros en cualquier momento vía E-Mail: ${environment.email}`)
  }

}
