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

  constructor(private router: Router,
    private authService: AuthService
  ) { }
  
  submit(usuario: HTMLInputElement, password: HTMLInputElement): void {
    if (this.authService.login(usuario.value, password.value)) {
      this.router.navigateByUrl("/dashboard"); 
    } else {
      alert('Credenciales inválidas');
    }
  }
}
