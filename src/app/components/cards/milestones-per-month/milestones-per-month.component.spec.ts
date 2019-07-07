import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestonesPerMonthComponent } from './milestones-per-month.component';

describe('MilestonesPerMonthComponent', () => {
  let component: MilestonesPerMonthComponent;
  let fixture: ComponentFixture<MilestonesPerMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilestonesPerMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestonesPerMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
