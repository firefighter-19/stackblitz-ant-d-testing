import { TestBed } from '@angular/core/testing';

import { UncertaintyFormDotsService } from './uncertainty-form-dots.service';

describe('UncertaintyFormDotsService', () => {
  let service: UncertaintyFormDotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UncertaintyFormDotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
