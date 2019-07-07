import { Component, OnInit } from '@angular/core';

export interface Section {
  subject: string;
  news: string;
}

@Component({
  selector: 'what-is-new',
  templateUrl: './what-is-new.component.html',
  styleUrls: ['./what-is-new.component.css']
})
export class WhatIsNewComponent implements OnInit {

  latests: Section[] = [
    {
      subject: 'Latest Build Released',
      news: 'The team has released a very impressive build. It is being considered as the next big thing.'
    },
    {
      subject: 'Cutting hair is no rocket science!',
      news: 'All you need is a pair of scissors and you are well to go. That\'s what she said. Well well...'
    },
    {
      subject: 'Tomato becomes expensive',
      news: 'Lately, tomato prices have gone through the roof. Come and join us, as we pray for the common man.'
    },
    {
      subject: 'A discovery of yourself',
      news: 'Do you think you know yourself? If no, then gather together for a grand event.'
    }
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
