import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeoDotsFormComponent } from './keo-dots.component';

describe('KeoDotsComponent', () => {
  let component: KeoDotsFormComponent;
  let fixture: ComponentFixture<KeoDotsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeoDotsFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeoDotsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
