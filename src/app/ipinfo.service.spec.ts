import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { IpinfoService } from './ipinfo.service';

describe('IpinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [IpinfoService]
    });
  });

  it('should be created', inject([IpinfoService], (service: IpinfoService) => {
    expect(service).toBeTruthy();
  }));
});
