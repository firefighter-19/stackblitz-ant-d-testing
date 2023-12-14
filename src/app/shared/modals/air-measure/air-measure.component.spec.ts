import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirMeasureComponent } from './air-measure.component';

describe('AirMeasureComponent', () => {
  let component: AirMeasureComponent;
  let fixture: ComponentFixture<AirMeasureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AirMeasureComponent]
    });
    fixture = TestBed.createComponent(AirMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
