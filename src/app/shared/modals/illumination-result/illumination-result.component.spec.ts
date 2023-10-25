import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlluminationResultComponent } from './illumination-result.component';

describe('IlluminationResultComponent', () => {
  let component: IlluminationResultComponent;
  let fixture: ComponentFixture<IlluminationResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IlluminationResultComponent]
    });
    fixture = TestBed.createComponent(IlluminationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
