import { TestBed } from '@angular/core/testing';

import { KeoMeasureService } from './keo-measure.service';

describe('KeoMeasureService', () => {
  let service: KeoMeasureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeoMeasureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
