import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyecPanelComponent } from './proyec-panel.component';

describe('ProyecPanelComponent', () => {
  let component: ProyecPanelComponent;
  let fixture: ComponentFixture<ProyecPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyecPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyecPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
