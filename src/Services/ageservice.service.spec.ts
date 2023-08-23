import { TestBed } from '@angular/core/testing';

import { AgeserviceService } from './ageservice.service';

describe('AgeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgeserviceService = TestBed.get(AgeserviceService);
    expect(service).toBeTruthy();
  });
});
