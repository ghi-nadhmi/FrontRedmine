import { TestBed } from '@angular/core/testing';

import { NatureDocService } from './nature-doc.service';

describe('NatureDocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NatureDocService = TestBed.get(NatureDocService);
    expect(service).toBeTruthy();
  });
});
