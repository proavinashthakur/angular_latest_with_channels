import { TestBed } from '@angular/core/testing';

import { AddCityService } from './add-city.service';

describe('AddCityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddCityService = TestBed.get(AddCityService);
    expect(service).toBeTruthy();
  });
});
