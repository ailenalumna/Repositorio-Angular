import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAcercaDeMiComponent } from './editar-acerca-de-mi.component';

describe('EditarAcercaDeMiComponent', () => {
  let component: EditarAcercaDeMiComponent;
  let fixture: ComponentFixture<EditarAcercaDeMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAcercaDeMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAcercaDeMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
