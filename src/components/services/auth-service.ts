import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  login(){
    this.loggedIn = true;
    sessionStorage.setItem('token', 'abc-123-token');
  }
  logout(){
    this.loggedIn = false;
    sessionStorage.clear();
  }

  estaLogado(): boolean {
    return this.loggedIn || !!sessionStorage.getItem('token')
  }

  
}
