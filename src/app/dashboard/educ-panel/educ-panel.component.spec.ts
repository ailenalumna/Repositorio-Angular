import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducPanelComponent } from './educ-panel.component';

describe('EducPanelComponent', () => {
  let component: EducPanelComponent;
  let fixture: ComponentFixture<EducPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
