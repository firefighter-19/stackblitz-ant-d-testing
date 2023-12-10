import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncertaintyFormDotsComponent } from './uncertainty-form-dots.component';

describe('UncertaintyFormDotsComponent', () => {
  let component: UncertaintyFormDotsComponent;
  let fixture: ComponentFixture<UncertaintyFormDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncertaintyFormDotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncertaintyFormDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
