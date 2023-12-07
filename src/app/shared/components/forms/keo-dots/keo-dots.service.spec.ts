import { TestBed } from '@angular/core/testing';

import { KeoDotsFormService } from './keo-dots.service';

describe('KeoDotsService', () => {
  let service: KeoDotsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeoDotsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
