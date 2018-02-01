/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VanhilereportService } from './vanhilereport.service';

describe('VanhilereportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VanhilereportService]
    });
  });

  it('should ...', inject([VanhilereportService], (service: VanhilereportService) => {
    expect(service).toBeTruthy();
  }));
});
