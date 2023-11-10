import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightnessDotsFormComponent } from './brightness-dots-form.component';

describe('BrightnessDotsFormComponent', () => {
  let component: BrightnessDotsFormComponent;
  let fixture: ComponentFixture<BrightnessDotsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrightnessDotsFormComponent]
    });
    fixture = TestBed.createComponent(BrightnessDotsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
