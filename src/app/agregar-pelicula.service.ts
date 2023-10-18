import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pelicula } from 'src/app/clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class AgregarPeliculaService {

  constructor() { }

  private peliculaAgregadaSource = new Subject<Pelicula>();
  peliculaAgregada$ = this.peliculaAgregadaSource.asObservable();

  agregarPelicula(pelicula: Pelicula) {
    this.peliculaAgregadaSource.next(pelicula);
  }
}

