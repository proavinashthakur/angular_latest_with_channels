import { TestBed } from '@angular/core/testing';

import { SelectCityService } from './select-city.service';

describe('SelectCityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectCityService = TestBed.get(SelectCityService);
    expect(service).toBeTruthy();
  });
});
