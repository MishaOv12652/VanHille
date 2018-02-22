import { TestBed, inject } from '@angular/core/testing';

import { CloudlinksService } from './cloudlinks.service';

describe('CloudlinksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloudlinksService]
    });
  });

  it('should be created', inject([CloudlinksService], (service: CloudlinksService) => {
    expect(service).toBeTruthy();
  }));
});
