import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessTimeReportComponent } from './fitness-time-report.component';

describe('FitnessTimeReportComponent', () => {
  let component: FitnessTimeReportComponent;
  let fixture: ComponentFixture<FitnessTimeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessTimeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessTimeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
