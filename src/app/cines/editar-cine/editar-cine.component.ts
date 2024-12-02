import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-cine',
  standalone: true,
  imports: [],
  templateUrl: './editar-cine.component.htm',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {
  @Input({transform: numberAttribute})
  id!: number;
}
