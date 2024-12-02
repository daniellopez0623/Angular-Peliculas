import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-generos',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './crear-generos.component.htm',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {

  router = inject(Router);

  guardarCambios() {
    // ... guardar los cambios
    this.router.navigate(['/generos']);
  }
  
}
//MatButtonModule, MatIconModule,RouterLink