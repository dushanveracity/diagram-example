import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitDiagramComponent } from './circuit-diagram.component';

describe('CircuitDiagramComponent', () => {
  let component: CircuitDiagramComponent;
  let fixture: ComponentFixture<CircuitDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitDiagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircuitDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
