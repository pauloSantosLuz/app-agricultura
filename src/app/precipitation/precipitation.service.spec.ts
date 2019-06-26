import { TestBed } from '@angular/core/testing';

import { PrecipitationService } from './precipitation.service';

describe('PrecipitationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrecipitationService = TestBed.get(PrecipitationService);
    expect(service).toBeTruthy();
  });
});
