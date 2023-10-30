import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuringFormComponent } from './measuring-form.component';

describe('MeasuringFormComponent', () => {
  let component: MeasuringFormComponent;
  let fixture: ComponentFixture<MeasuringFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MeasuringFormComponent]
    });
    fixture = TestBed.createComponent(MeasuringFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
