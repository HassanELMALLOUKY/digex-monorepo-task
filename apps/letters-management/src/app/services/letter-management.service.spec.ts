import { TestBed } from '@angular/core/testing';

import { LetterManagementService } from './letter-management.service';

describe('LetterManagementService', () => {
  let service: LetterManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetterManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
