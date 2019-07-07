import { Component, OnInit } from '@angular/core';

export interface Section {
  subject: string;
  info: string;
}

@Component({
  selector: 'tasks-todo',
  templateUrl: './tasks-todo.component.html',
  styleUrls: ['./tasks-todo.component.css']
})

export class TasksTodoComponent implements OnInit {

  todos: Section[] = [
    {
      subject: 'Discussion with team',
      info: 'Managing the time',
    },
    {
      subject: 'Call friend',
      info: 'Letting him know that there is some work',
    },
    {
      subject: 'Mail regarding release',
      info: 'Enquire whether the date is being shifted',
    }
  ];

  others: Section[] = [
    {
      subject: 'Water the plants',
      info: 'The plants are drying',
    },
    {
      subject: 'Call grandmother',
      info: 'Wish her well',
    },
    {
      subject: 'Buy groceries',
      info: 'Purchase groceries for the next week',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
