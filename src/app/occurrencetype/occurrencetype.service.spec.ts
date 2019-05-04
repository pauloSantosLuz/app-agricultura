import { TestBed } from '@angular/core/testing';

import { OccurrencetypeService } from './occurrencetype.service';

describe('OccurrencetypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OccurrencetypeService = TestBed.get(OccurrencetypeService);
    expect(service).toBeTruthy();
  });
});
