// src/app/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validUser = 'Apellido';
  private validPassword = '12345';

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    if (username === this.validUser && password === this.validPassword) {
      sessionStorage.setItem('user', username);
      return true;
    }
    return false;
  }

  logout(): void {
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('user') !== null;
  }
}
