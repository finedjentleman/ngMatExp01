import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingReadersReportComponent } from './trending-readers-report.component';

describe('TrendingReadersReportComponent', () => {
  let component: TrendingReadersReportComponent;
  let fixture: ComponentFixture<TrendingReadersReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingReadersReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingReadersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
