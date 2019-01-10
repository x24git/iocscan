import { TestBed, inject } from '@angular/core/testing';

import { SearchshareService } from './searchshare.service';

describe('SearchshareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchshareService]
    });
  });

  it('should be created', inject([SearchshareService], (service: SearchshareService) => {
    expect(service).toBeTruthy();
  }));
});
