import { TestBed } from '@angular/core/testing';

import { BoCaService } from './bo-ca.service';

describe('BoCaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoCaService = TestBed.get(BoCaService);
    expect(service).toBeTruthy();
  });
});
