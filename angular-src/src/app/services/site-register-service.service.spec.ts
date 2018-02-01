/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SiteRegisterServiceService } from './site-register-service.service';

describe('SiteRegisterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteRegisterServiceService]
    });
  });

  it('should ...', inject([SiteRegisterServiceService], (service: SiteRegisterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
