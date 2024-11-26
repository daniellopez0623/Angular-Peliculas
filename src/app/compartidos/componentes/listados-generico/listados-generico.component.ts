import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listados-generico',
  standalone: true,
  imports: [],
  templateUrl: './listados-generico.component.htm',
  styleUrl: './listados-generico.component.css'
})
export class ListadosGenericoComponent {
@Input({required: true})
listado: any;
}
