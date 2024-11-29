import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.htm',
  styleUrl: './rating.component.css'
})
export class RatingComponent {


  @Input({ required: true, transform: (valor: number) => Array(valor).fill(0) })
  maximoRating!: number[];

  @Input()
  ratingSeleccionado = 0;
  @Output()
  votado = new EventEmitter<number>();

  ratingAnterior = 0;

  manejoMouseEnter(i: number) {
    this.ratingSeleccionado = i + 1;
  }

  manejoMouseLeave() {
    if (this.ratingAnterior !== 0) {
      this.ratingSeleccionado = this.ratingAnterior;
    } else {
      this.ratingSeleccionado = 0;
    }
  }

  manejarClick(i: number) {
    this.ratingSeleccionado = i + 1;
    this.ratingAnterior = this.ratingSeleccionado;
    this.votado.emit(this.ratingSeleccionado);
  }
}
