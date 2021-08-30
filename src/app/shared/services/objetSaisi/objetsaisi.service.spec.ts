import { TestBed } from '@angular/core/testing';

import { ObjetsaisiService } from './objetsaisi.service';

describe('ObjetsaisiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjetsaisiService = TestBed.get(ObjetsaisiService);
    expect(service).toBeTruthy();
  });
});
