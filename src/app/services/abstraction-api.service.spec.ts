import { TestBed } from '@angular/core/testing';

import { AbstractionApiService } from './abstraction-api.service';

describe('AbstractionApiService', () => {
  let service: AbstractionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
