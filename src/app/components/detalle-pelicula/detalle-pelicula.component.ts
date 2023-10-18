import { Component,OnInit} from '@angular/core';
import { DetallePeliculaService } from '../../detalle-pelicula.service';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit{
  constructor(private detallePelicula: DetallePeliculaService) {}

  nombre: string = "";
  cantidadPublico: number = 0;
  tipo: string = "";
  foto: string = "";
  fechaEstreno : string = "";

  ngOnInit() {
    // Suscribirse al observable para recibir notificaciones de clics en filas
    this.detallePelicula.filaClickeada$.subscribe(item => {
      if (item) {

        this.nombre = item.nombre;
        this.cantidadPublico = item.cantidadPublico;
        this.tipo = item.tipo;
        this.foto= item.carteleraFoto;
        this.fechaEstreno = item.fechaEstreno;
        
        // Implementa aquí la lógica que deseas cuando se hace clic en una fila
        console.log('Fila clickeada en otro componente:', item);
        // Realiza acciones como mostrar detalles, navegar a otra página, etc.
      }
    });
  }

}
