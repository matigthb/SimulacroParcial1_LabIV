import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { AgregarPeliculaService } from '../../agregar-pelicula.service';
import { DetallePeliculaService } from '../../detalle-pelicula.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent{
  @Input() peliculas: Pelicula[] = [];

  constructor(private peliculaService: AgregarPeliculaService, private comunicacionService: DetallePeliculaService) {}

  filaClickeada(item: any) {
    // Notificar al servicio cuando se hace clic en una fila
    this.comunicacionService.notificarFilaClickeada(item);
  }

  ngOnInit() {
    this.peliculaService.peliculaAgregada$.subscribe(pelicula => {
      // Lógica para agregar la película a la lista local
      this.peliculas.push(pelicula);
    });
  }
}
