import { TestBed } from '@angular/core/testing';

import { SessionService } from './policy.service';

describe('SessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionService = TestBed.get(SessionService);
    expect(service).toBeTruthy();
  });
});
