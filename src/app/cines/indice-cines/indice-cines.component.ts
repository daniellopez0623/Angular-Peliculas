import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-indice-cines',
  standalone: true,
  imports: [RouterLink, MatButton],
  templateUrl: './indice-cines.component.htm',
  styleUrl: './indice-cines.component.css'
})
export class IndiceCinesComponent {

}
