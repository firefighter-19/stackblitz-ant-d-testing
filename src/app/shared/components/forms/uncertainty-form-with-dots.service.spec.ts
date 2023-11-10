import { TestBed } from '@angular/core/testing';

import { UncertaintyFormWithDotsService } from './uncertainty-form-with-dots.service';

describe('UncertaintyFormWithDotsService', () => {
  let service: UncertaintyFormWithDotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UncertaintyFormWithDotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
