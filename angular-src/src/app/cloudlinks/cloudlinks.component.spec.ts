import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudlinksComponent } from './cloudlinks.component';

describe('CloudlinksComponent', () => {
  let component: CloudlinksComponent;
  let fixture: ComponentFixture<CloudlinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudlinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
