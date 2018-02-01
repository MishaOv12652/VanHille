/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VanhileformService } from './vanhileform.service';

describe('VanhileformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VanhileformService]
    });
  });

  it('should ...', inject([VanhileformService], (service: VanhileformService) => {
    expect(service).toBeTruthy();
  }));
});
