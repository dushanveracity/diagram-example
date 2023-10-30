import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramThreeComponent } from './diagram-three.component';

describe('DiagramThreeComponent', () => {
  let component: DiagramThreeComponent;
  let fixture: ComponentFixture<DiagramThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagramThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagramThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
