import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.htm',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit {

  ngOnInit(): void {
    this.maximoRatingArreglo = Array(this.maximoRating).fill(0);
  }
 
  @Input({ required: true })
  maximoRating!: number;

  @Input()
  ratingSeleccionado = 0;

  maximoRatingArreglo: any[] = [];

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
    this.ratingAnterior =  this.ratingSeleccionado;
  }
}
