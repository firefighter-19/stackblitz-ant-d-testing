import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirComponent } from './air.component';

describe('AirMeasureComponent', () => {
  let component: AirComponent;
  let fixture: ComponentFixture<AirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AirComponent],
    });
    fixture = TestBed.createComponent(AirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
