import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RegistroEmpleadosModalComponent } from 'src/app/Modales/registro-empleados-modal/registro-empleados-modal.component';

@Component({
  selector: 'app-btn-anadir-empleado',
  templateUrl: './btn-anadir-empleado.component.html',
  styleUrls: ['./btn-anadir-empleado.component.css']
})
export class BtnAnadirEmpleadoComponent implements OnInit {


  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }
  
  AbrirRegistro(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(RegistroEmpleadosModalComponent, dialogConfig);
  }
}
