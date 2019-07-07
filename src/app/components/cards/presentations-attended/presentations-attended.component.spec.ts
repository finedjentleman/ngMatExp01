import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationsAttendedComponent } from './presentations-attended.component';

describe('PresentationsAttendedComponent', () => {
  let component: PresentationsAttendedComponent;
  let fixture: ComponentFixture<PresentationsAttendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationsAttendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationsAttendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
