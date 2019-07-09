import { TestBed } from '@angular/core/testing';

import { OccurencelocationService } from './occurencelocation.service';

describe('OccurencelocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OccurencelocationService = TestBed.get(OccurencelocationService);
    expect(service).toBeTruthy();
  });
});
