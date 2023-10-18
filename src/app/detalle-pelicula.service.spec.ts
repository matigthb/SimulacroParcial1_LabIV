import { TestBed } from '@angular/core/testing';

import { DetallePeliculaService } from './detalle-pelicula.service';

describe('DetallePeliculaService', () => {
  let service: DetallePeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallePeliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
