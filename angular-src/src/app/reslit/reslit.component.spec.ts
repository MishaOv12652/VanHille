import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReslitComponent } from './reslit.component';

describe('ReslitComponent', () => {
  let component: ReslitComponent;
  let fixture: ComponentFixture<ReslitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReslitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReslitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
