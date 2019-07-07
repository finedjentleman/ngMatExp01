import { Component, OnInit } from '@angular/core';

export interface Section {
  subject: string;
  info: string;
}

@Component({
  selector: 'tasks-completed',
  templateUrl: './tasks-completed.component.html',
  styleUrls: ['./tasks-completed.component.css']
})

export class TasksCompletedComponent implements OnInit {

  completed: Section[] = [
    {
      subject: 'Visit to sweet shop',
      info: 'Went for a stroll',
    },
    {
      subject: 'Purchased books',
      info: 'Important addition to the library',
    },
    {
      subject: 'Wrote a column on Web Dev',
      info: 'Where is the paradigm shift?',
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
