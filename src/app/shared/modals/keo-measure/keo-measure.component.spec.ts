import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeoMeasureComponent } from './keo-measure.component';

describe('KeoMeasureComponent', () => {
  let component: KeoMeasureComponent;
  let fixture: ComponentFixture<KeoMeasureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeoMeasureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeoMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
