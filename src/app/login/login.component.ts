import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='rayhan'
  password=''
  errorMessage='Invalid Credentisal'
  invalidogin=false

  constructor(private router:Router) { 

  }

  ngOnInit() {


  }

  handleLogin(){

 if(this.username==='rayhan' && this.password==='dummy'){

       this.router.navigate(['welcome',this.username])
      this.invalidogin=false

 }

 else{

  this.invalidogin=true
 }
   

  }

}