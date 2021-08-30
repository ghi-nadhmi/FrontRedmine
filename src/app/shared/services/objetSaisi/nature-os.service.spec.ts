import { TestBed } from '@angular/core/testing';

import { NatureOSService } from './nature-os.service';

describe('NatureOSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NatureOSService = TestBed.get(NatureOSService);
    expect(service).toBeTruthy();
  });
});
