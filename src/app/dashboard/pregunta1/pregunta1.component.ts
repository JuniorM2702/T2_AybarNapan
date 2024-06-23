import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta1',
  standalone: true,
  templateUrl: './pregunta1.component.html',
  styleUrls: ['./pregunta1.component.css'],
  imports: [MaterialModule, FormsModule, CommonModule],
})
export class Pregunta1Component {
  precioUnitario: number;
  cantidad: number;
  precioFinal: number;

  constructor() {
    this.precioUnitario = 0; 
    this.cantidad = 0;
    this.precioFinal = 0; 
  }

  calcularPrecio(): void {
    if (this.cantidad > 20) {
      this.precioFinal = this.cantidad * this.precioUnitario * 0.9; 
    } else if (this.cantidad > 10) {
      this.precioFinal = this.cantidad * this.precioUnitario * 0.95;
    } else {
      this.precioFinal = this.cantidad * this.precioUnitario;
    }
  }
}
