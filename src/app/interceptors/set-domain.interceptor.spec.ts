import { TestBed } from '@angular/core/testing';

import { SetDomainInterceptor } from './set-domain.interceptor';

describe('SetDomainInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SetDomainInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SetDomainInterceptor = TestBed.inject(SetDomainInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
