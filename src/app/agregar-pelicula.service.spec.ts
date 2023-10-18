import { TestBed } from '@angular/core/testing';

import { AgregarPeliculaService } from './agregar-pelicula.service';

describe('AgregarPeliculaService', () => {
  let service: AgregarPeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarPeliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
