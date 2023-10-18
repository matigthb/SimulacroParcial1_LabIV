import { Component, OnInit} from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { DetallePeliculaService } from '../../detalle-pelicula.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit{
  peliculas : Pelicula[] = [];
  mostrarDetalle : boolean = false;

  constructor(private detallePelicula: DetallePeliculaService){

  }
  ngOnInit(): void {
    let peliculasJSON : string | null = localStorage.getItem("peliculas");

    if(peliculasJSON != null)
    {
        this.peliculas = JSON.parse(peliculasJSON);
    }
    else
    {
        this.peliculas = Array<Pelicula>();
    }

    this.detallePelicula.filaClickeada$.subscribe(item => {
      if (item) {
        this.mostrarDetalle = true;

        
      }
      
    });

  }
}
