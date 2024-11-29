import { Component, OnInit } from '@angular/core';
import { ListadosPeliculasComponent } from "./peliculas/listados-peliculas/listados-peliculas.component";
import { MenuComponent } from './compartidos/componentes/menu/menu.component';
import { RatingComponent } from "./compartidos/componentes/rating/rating.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListadosPeliculasComponent, MenuComponent, RatingComponent],
  templateUrl: './app.component.htm',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [
        {
          titulo: 'Solo Leveling - Reawakening',
          fechaLanzamiento: new Date('2024-12-05'),
          precios: 249.99,
          poster: '../assets/img/solo liveling.jpg'
        },
        {
          titulo: 'Attack on Titan - THE LAST ATTACK',
          fechaLanzamiento: new Date('2024-11-20'),
          precios: 249.99,
          poster: '../assets/img/last attack.jpg'
        },
        {
          titulo: 'Dune',
          fechaLanzamiento: new Date('2021-10-21'),
          precios: 159.99,
          poster: '../assets/img/Dune.jpg'
        },
        {
          titulo: 'Spider-Man: No Way Home',
          fechaLanzamiento: new Date('2021-12-17'),
          precios: 299.99,
          poster: '../assets/img/Spider_Man_No_Way_Homo.jpg'
        },
        {
          titulo: 'The Batman',
          fechaLanzamiento: new Date('2022-03-04'),
          precios: 189.99,
          poster: '../assets/img/the-batman.jpg'
        },
        {
          titulo: 'Black Panther: Wakanda Forever',
          fechaLanzamiento: new Date('2022-11-11'),
          precios: 229.99,
          poster: '../assets/img/Black-Panther-Wakanda-Forever.jpg'
        }
      ];

      this.peliculasEnEstreno = [
        {
          titulo: 'Inside Out 2',
          fechaLanzamiento: new Date(),
          precios: 1400.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'
        },
        {
          titulo: 'Moana 2',
          fechaLanzamiento: new Date('2016-05-03'),
          precios: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
        },
        {
          titulo: 'Bad Boys: Ride or Die',
          fechaLanzamiento: new Date('2016-05-03'),
          precios: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
        },
        {
          titulo: 'Deadpool & Wolverine',
          fechaLanzamiento: new Date('2016-05-03'),
          precios: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg'
        },
        {
          titulo: 'Oppenheimer',
          fechaLanzamiento: new Date('2016-05-03'),
          precios: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg'
        },
        {
          titulo: 'The Flash',
          fechaLanzamiento: new Date('2016-05-03'),
          precios: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg'
        }
      ];
    }, 100);
  }

  peliculasEnCines!: any[];
  peliculasEnEstreno!: any[];

}
