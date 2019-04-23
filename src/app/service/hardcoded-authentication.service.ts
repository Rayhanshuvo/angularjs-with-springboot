import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    
    if (username === "rayhan" && password === 'dummy') {
     // console.log("Before"+sessionStorage.getItem('authenticaterUser') )
      sessionStorage.setItem('authenticaterUser', username)
     // console.log("After"+sessionStorage.getItem('authenticaterUser') )
      return true;
    }
    return false;

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')

    return !(user === null)
  }

  logout(){

    sessionStorage.removeItem('authenticaterUser')
  }
}
