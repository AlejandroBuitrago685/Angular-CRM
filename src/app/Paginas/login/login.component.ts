import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin = new FormGroup({
    email: new FormControl("", Validators.required),
    pass: new FormControl('', Validators.required),
  });

  email = this.formularioLogin.get("email")?.value;
  pass = this.formularioLogin.get("pass")?.value;

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.formularioLogin.get("email")?.value);
    console.log(this.formularioLogin.get("pass")?.value );
  }

}
