import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdulitComponent } from './edulit.component';

describe('EdulitComponent', () => {
  let component: EdulitComponent;
  let fixture: ComponentFixture<EdulitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdulitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdulitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
