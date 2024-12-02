import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-indice-generos',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './indice-generos.component.htm',
  styleUrl: './indice-generos.component.css'
})
export class IndiceGenerosComponent {

}
