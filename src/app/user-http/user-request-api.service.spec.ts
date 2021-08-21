import { TestBed } from '@angular/core/testing';

import { UserRequestApiService } from './user-request-api.service';

describe('UserRequestApiService', () => {
  let service: UserRequestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRequestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
