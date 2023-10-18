import { Component, Input } from '@angular/core';
import { Actor } from '../../../clases/actor'
import { AgregarActorService } from '../../../agregar-actor.service'

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent {
  nombre : string = "";
  apellido : string = "";
  pais: string = "";

  actores: Actor[] = [];

  constructor(private actorService : AgregarActorService)
  {

  }

  paisSeleccionado(pais : any)
  {
    this.pais = pais.name;
    console.log(this.pais);
  }

  getLS()
  {
    let actoresJSON : string | null = localStorage.getItem("actores");

    if(actoresJSON != null)
    {
        this.actores = JSON.parse(actoresJSON);
    }
    else
    {
        this.actores = Array<Actor>();
    }

  }

  agregarActor(){
    let nuevoActor : Actor =  new Actor(this.nombre, this.apellido, this.pais);;

    this.getLS();

    this.actores.push(nuevoActor);

    localStorage.setItem("actores", JSON.stringify(this.actores));

    this.actorService.agregarActor(nuevoActor);

    this.nombre = "";
    this.apellido = "";
    this.pais = "";
  }
}
