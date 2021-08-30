import { TestBed } from '@angular/core/testing';

import { DecisionDossierService } from './decision-dossier.service';

describe('DecisionDossierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DecisionDossierService = TestBed.get(DecisionDossierService);
    expect(service).toBeTruthy();
  });
});
