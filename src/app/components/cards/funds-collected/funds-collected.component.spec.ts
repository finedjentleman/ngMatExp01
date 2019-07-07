import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsCollectedComponent } from './funds-collected.component';

describe('FundsCollectedComponent', () => {
  let component: FundsCollectedComponent;
  let fixture: ComponentFixture<FundsCollectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsCollectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsCollectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
