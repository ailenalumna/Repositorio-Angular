import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHabilidadesComponent } from './editar-habilidades.component';

describe('EditarHabilidadesComponent', () => {
  let component: EditarHabilidadesComponent;
  let fixture: ComponentFixture<EditarHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarHabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
