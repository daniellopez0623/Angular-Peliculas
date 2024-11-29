import { Component, OnInit, Input, input } from '@angular/core';
//import { CurrencyPipe, DatePipe } from '@angular/common';
import { ListadosGenericoComponent } from "../../compartidos/componentes/listados-generico/listados-generico.component";
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-listados-peliculas',
  standalone: true,
  imports: [ListadosGenericoComponent, MatButtonModule, MatIconModule],
  templateUrl: './listados-peliculas.component.htm',
  styleUrl: './listados-peliculas.component.css'
})
export class ListadosPeliculasComponent {

  //title = 'Angular Peliculas';
  @Input({ required: true }) pelicula!: any[];

 /* agregarPelicula() {
    this.pelicula.push({
      titulo: 'Inseption',
      fechaLanzamiento: new Date('2024-12-05'),
      precios: 100
      // poster: '../assets/img/solo liveling.jpg'
    })
  }
  remover(pelicula: any) {
    const i = this.pelicula.findIndex(peliculaActual => peliculaActual.titulo === pelicula.titulo);
    this.pelicula.splice(i, 1);
  }
    */
}
