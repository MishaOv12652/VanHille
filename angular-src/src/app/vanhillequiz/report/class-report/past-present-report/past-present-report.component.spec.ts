import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPresentReportComponent } from './past-present-report.component';

describe('PastPresentReportComponent', () => {
  let component: PastPresentReportComponent;
  let fixture: ComponentFixture<PastPresentReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastPresentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastPresentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
