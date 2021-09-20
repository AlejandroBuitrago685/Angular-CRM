import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Empresa = environment.empresa;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.removeItem("token");
    this.router.navigate([""]);
  }

}
