import { TestBed } from '@angular/core/testing';

import { AgregarActorService } from './agregar-actor.service';

describe('AgregarActorService', () => {
  let service: AgregarActorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarActorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
