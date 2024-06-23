import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === "Aybar" && password === "12345") {
      sessionStorage.setItem("isLogged", "true");
      return true; 
    } else {
      return false;
    }
  }

  logout(): void {
    sessionStorage.removeItem("isLogged");
  }

  isLogged(): boolean {
    return !!sessionStorage.getItem("isLogged");
  }
}
