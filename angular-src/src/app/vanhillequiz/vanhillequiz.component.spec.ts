import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanhillequizComponent } from './vanhillequiz.component';

describe('VanhillequizComponent', () => {
  let component: VanhillequizComponent;
  let fixture: ComponentFixture<VanhillequizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanhillequizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanhillequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
