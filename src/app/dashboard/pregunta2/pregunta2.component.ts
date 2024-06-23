import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta1',
  standalone: true,
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.css'],
  imports: [MaterialModule, FormsModule, CommonModule],
})
export class Pregunta2Component {
  cantidadLlantas: number = 0;

  precioPorLlantaMenosDe5: number = 800;
  precioPorLlanta5OMas: number = 700;

  calcularTotal(): number {
    if (this.cantidadLlantas < 5) {
      return this.cantidadLlantas * this.precioPorLlantaMenosDe5;
    } else {
      return this.cantidadLlantas * this.precioPorLlanta5OMas;
    }
  }
}