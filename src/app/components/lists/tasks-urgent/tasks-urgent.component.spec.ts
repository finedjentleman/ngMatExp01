import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksUrgentComponent } from './tasks-urgent.component';

describe('TasksUrgentComponent', () => {
  let component: TasksUrgentComponent;
  let fixture: ComponentFixture<TasksUrgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksUrgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksUrgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
