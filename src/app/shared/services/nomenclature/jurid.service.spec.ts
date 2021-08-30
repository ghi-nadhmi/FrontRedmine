import { TestBed } from '@angular/core/testing';

import { JuridService } from './jurid.service';

describe('JuridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JuridService = TestBed.get(JuridService);
    expect(service).toBeTruthy();
  });
});
