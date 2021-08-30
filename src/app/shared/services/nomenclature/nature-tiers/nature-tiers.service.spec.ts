import { TestBed } from '@angular/core/testing';

import { NatureTiersService } from './nature-tiers.service';

describe('NatureTiersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NatureTiersService = TestBed.get(NatureTiersService);
    expect(service).toBeTruthy();
  });
});
