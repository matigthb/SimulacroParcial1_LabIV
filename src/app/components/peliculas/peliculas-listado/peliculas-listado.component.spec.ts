import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasListadoComponent } from './peliculas-listado.component';

describe('PeliculasListadoComponent', () => {
  let component: PeliculasListadoComponent;
  let fixture: ComponentFixture<PeliculasListadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeliculasListadoComponent]
    });
    fixture = TestBed.createComponent(PeliculasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
