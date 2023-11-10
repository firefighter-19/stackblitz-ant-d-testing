import { TestBed } from '@angular/core/testing';

import { BrightnessDotsFormService } from './brightness-dots-form.service';

describe('BrightnessDotsFormService', () => {
  let service: BrightnessDotsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrightnessDotsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
