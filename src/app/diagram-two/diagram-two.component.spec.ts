import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramTwoComponent } from './diagram-two.component';

describe('DiagramTwoComponent', () => {
  let component: DiagramTwoComponent;
  let fixture: ComponentFixture<DiagramTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagramTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagramTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
