import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesDevelopersReportComponent } from './languages-developers-report.component';

describe('LanguagesDevelopersReportComponent', () => {
  let component: LanguagesDevelopersReportComponent;
  let fixture: ComponentFixture<LanguagesDevelopersReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesDevelopersReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesDevelopersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
