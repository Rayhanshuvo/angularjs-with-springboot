import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  constructor(private router:Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { 

  }

  ngOnInit() {


  }

  handleLogin(){

 //if(this.username==='rayhan' && this.password==='dummy'){
  if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){

       this.router.navigate(['welcome',this.username])
      this.invalidogin=false

 }

 else{

  this.invalidogin=true
 }
   

  }

}
