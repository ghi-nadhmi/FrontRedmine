import { TestBed } from '@angular/core/testing';

import { ActesService } from './actes.service';

describe('ActesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActesService = TestBed.get(ActesService);
    expect(service).toBeTruthy();
  });
});
