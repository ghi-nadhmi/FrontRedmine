import { TestBed } from '@angular/core/testing';

import { PagintorService } from './pagintor.service';

describe('PagintorService', () => {
  let service: PagintorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagintorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
