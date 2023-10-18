import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoresListadoComponent } from './actores-listado.component';

describe('ActoresListadoComponent', () => {
  let component: ActoresListadoComponent;
  let fixture: ComponentFixture<ActoresListadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActoresListadoComponent]
    });
    fixture = TestBed.createComponent(ActoresListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
