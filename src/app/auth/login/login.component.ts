import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  submit(username: HTMLInputElement, password: HTMLInputElement): void {
    if (this.authService.login(username.value, password.value)) {
      console.log('Inicio de sesión exitoso');
      window.location.href = "/dashboard"
    } else {
      alert('Credenciales inválidas');
    }
  }
}