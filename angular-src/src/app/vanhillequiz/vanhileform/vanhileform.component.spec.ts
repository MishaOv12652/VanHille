import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanhileformComponent } from './vanhileform.component';

describe('VanhileformComponent', () => {
  let component: VanhileformComponent;
  let fixture: ComponentFixture<VanhileformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanhileformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanhileformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
