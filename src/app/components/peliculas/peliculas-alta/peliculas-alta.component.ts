import { Component,  EventEmitter, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { AgregarPeliculaService } from '../../../agregar-pelicula.service';

@Component({
  selector: 'app-peliculas-alta',
  templateUrl: './peliculas-alta.component.html',
  styleUrls: ['./peliculas-alta.component.css']
})
export class PeliculasAltaComponent {
  @Output() peliculaAgregada = new EventEmitter<Pelicula>();

  id: number = 0;
  nombre: string = "";
  tipo: string = "";
  fechaEstreno: Date = new Date();
  cantidadPublico: number = 0;
  carteleraFoto: string = "";

  peliculas: Pelicula[] = [];

  constructor(private peliculaService: AgregarPeliculaService) {}

  getLS()
  {
    let peliculasJSON : string | null = localStorage.getItem("peliculas");

    if(peliculasJSON != null)
    {
        this.peliculas = JSON.parse(peliculasJSON);
    }
    else
    {
        this.peliculas = Array<Pelicula>();
    }

  }

  agregarPelicula()
  {
    let nuevaPelicula : Pelicula =  new Pelicula(this.id,this.nombre,this.tipo,this.fechaEstreno,this.cantidadPublico,this.carteleraFoto);;

    this.getLS();

    this.peliculas.push(nuevaPelicula);

    localStorage.setItem("peliculas", JSON.stringify(this.peliculas));

    this.peliculaService.agregarPelicula(nuevaPelicula);

    this.nombre = "";
    this.tipo = "";
    this.fechaEstreno = new Date();
    this.cantidadPublico = 0;
    this.carteleraFoto = "";
  }

  Print(){
    /*this.getLS();

    this.peliculas.splice(4,2);

    localStorage.setItem("peliculas", JSON.stringify(this.peliculas));*/
  }

  handleFileInput(event: any)
  {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.carteleraFoto = reader.result as string;
      };
    }
  }

  onInputChange(event: Event): void {
    this.cantidadPublico = Number((event.target as HTMLInputElement).value);
  }
}
