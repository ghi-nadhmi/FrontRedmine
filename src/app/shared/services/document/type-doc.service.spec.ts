import { TestBed } from '@angular/core/testing';

import { TypeDocService } from './type-doc.service';

describe('TypeDocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeDocService = TestBed.get(TypeDocService);
    expect(service).toBeTruthy();
  });
});
