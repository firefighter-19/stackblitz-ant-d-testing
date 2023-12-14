import { TestBed } from '@angular/core/testing';

import { AirMeasureService } from './air-measure.service';

describe('AirMeasureService', () => {
  let service: AirMeasureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirMeasureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
