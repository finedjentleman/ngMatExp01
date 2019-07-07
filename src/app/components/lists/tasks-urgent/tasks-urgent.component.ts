import { Component, OnInit } from '@angular/core';

export interface Section {
  subject: string;
  info: string;
}

@Component({
  selector: 'tasks-urgent',
  templateUrl: './tasks-urgent.component.html',
  styleUrls: ['./tasks-urgent.component.css']
})

export class TasksUrgentComponent implements OnInit {

  issues: Section[] = [
    {
      subject: 'Circular dependency',
      info: 'Handle carefully',
    },
    {
      subject: 'Form element not displaying',
      info: 'Let a UI Dev do the work',
    },
    {
      subject: 'Bugs in build',
      info: 'Look into the dist',
    }
  ];

  approvals: Section[] = [
    {
      subject: 'Permission',
      info: 'Approve in case of no conflicts',
    },
    {
      subject: 'Budget',
      info: 'Generalize it properly',
    },
    {
      subject: 'Sick Leave',
      info: 'Not for a long time',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
