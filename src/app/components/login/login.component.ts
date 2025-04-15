import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  standalone:true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string="";
  senha:string="";

  validacao(){
    this.email= (document.getElementById("email") as HTMLInputElement).value;
    this.senha=(document.getElementById("email") as HTMLInputElement).value;
  }

}
