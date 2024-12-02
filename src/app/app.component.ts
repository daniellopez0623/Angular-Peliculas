import { Component, OnInit } from '@angular/core';
//import { ListadosPeliculasComponent } from "./peliculas/listados-peliculas/listados-peliculas.component";
import { MenuComponent } from './compartidos/componentes/menu/menu.component';
import { RouterOutlet } from '@angular/router';
//import { RatingComponent } from "./compartidos/componentes/rating/rating.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent, RouterOutlet],
  templateUrl: './app.component.htm',
  styleUrl: './app.component.css'
})
export class AppComponent {
 /* procesarVoto(voto: number) {
    alert(`Calificación otorgada: ${voto}`);
  }*/

}
