import { TestBed } from '@angular/core/testing';

import { OccurenceService } from './occurence.service';

describe('OccurenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OccurenceService = TestBed.get(OccurenceService);
    expect(service).toBeTruthy();
  });
});
