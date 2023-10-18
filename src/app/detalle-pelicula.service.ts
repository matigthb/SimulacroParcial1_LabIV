import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetallePeliculaService {
  constructor() { }

  private filaClickeadaSubject = new BehaviorSubject<any>(null);
  filaClickeada$ = this.filaClickeadaSubject.asObservable();

  notificarFilaClickeada(item: any) {
    this.filaClickeadaSubject.next(item);
  }
}
