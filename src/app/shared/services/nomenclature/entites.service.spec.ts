import { TestBed } from '@angular/core/testing';

import { EntitesService } from './entites.service';

describe('EntitesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntitesService = TestBed.get(EntitesService);
    expect(service).toBeTruthy();
  });
});
