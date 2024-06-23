import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  templateUrl: './pregunta3.component.html',
  styleUrls: ['./pregunta3.component.css'],
  imports: [MaterialModule, FormsModule, CommonModule],
})
export class Pregunta3Component {
  cantidadProductos: number = 0;
  precioUnitario: number = 0;

  calcularTotal(): number {
    let total = this.cantidadProductos * this.precioUnitario;

    if (total > 200) {
      total *= 0.8;
    }

    return total;
  }
}