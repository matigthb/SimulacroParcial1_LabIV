import { Component, Input } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actores-listado',
  templateUrl: './actores-listado.component.html',
  styleUrls: ['./actores-listado.component.css']
})
export class ActoresListadoComponent {
  @Input() actores: Actor[] = [];

  
}
