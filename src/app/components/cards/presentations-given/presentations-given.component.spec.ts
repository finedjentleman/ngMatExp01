import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationsGivenComponent } from './presentations-given.component';

describe('PresentationsGivenComponent', () => {
  let component: PresentationsGivenComponent;
  let fixture: ComponentFixture<PresentationsGivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationsGivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationsGivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
