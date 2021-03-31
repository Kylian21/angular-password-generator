import { TestBed } from '@angular/core/testing';

import { PasswordService } from './password.service';

describe('PasswordService', () => {
  let service: PasswordServiceS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
