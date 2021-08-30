import { TestBed } from '@angular/core/testing';

import { BoCdService } from './bo-cd.service';

describe('BoCdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoCdService = TestBed.get(BoCdService);
    expect(service).toBeTruthy();
  });
});
