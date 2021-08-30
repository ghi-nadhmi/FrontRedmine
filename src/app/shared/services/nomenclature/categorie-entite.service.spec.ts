import { TestBed } from '@angular/core/testing';

import { CategorieEntiteService } from './categorie-entite.service';

describe('CategorieEntiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategorieEntiteService = TestBed.get(CategorieEntiteService);
    expect(service).toBeTruthy();
  });
});
