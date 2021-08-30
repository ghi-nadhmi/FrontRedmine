import { TestBed } from '@angular/core/testing';

import { AdmPersonnelService } from './adm-personnel.service';

describe('AdmPersonnelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmPersonnelService = TestBed.get(AdmPersonnelService);
    expect(service).toBeTruthy();
  });
});
