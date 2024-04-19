import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})



export class SignUpComponent {
  fullName:string="";
  role:string="";
  email:string="";
  password:string="";



  constructor(private http: HttpClient) {}

Save() {
  let bodyData = {
    fullName: this.fullName,
    role: this.role,
    email: this.email,
    password: this.password
  };

  this.http.post("http://localhost:8084/auth/signup", bodyData, { responseType: "text" }).subscribe(
    (resultData: any) => {
      console.log(resultData);
      alert("Your registration was successful");
    }
  );
}}

