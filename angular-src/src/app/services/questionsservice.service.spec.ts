/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuestionsserviceService } from './questionsservice.service';

describe('QuestionsserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsserviceService]
    });
  });

  it('should ...', inject([QuestionsserviceService], (service: QuestionsserviceService) => {
    expect(service).toBeTruthy();
  }));
});
