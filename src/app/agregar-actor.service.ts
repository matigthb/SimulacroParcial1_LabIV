import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Actor } from 'src/app/clases/actor';

@Injectable({
  providedIn: 'root'
})
export class AgregarActorService {

  constructor() { }

  private actorAgregadoSource = new Subject<Actor>();
  actorAgregado$ = this.actorAgregadoSource.asObservable();

  agregarActor(actor: Actor) {
    this.actorAgregadoSource.next(actor);
  }
}
