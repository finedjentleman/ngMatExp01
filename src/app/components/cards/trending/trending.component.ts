import { Component, OnInit } from '@angular/core';

export interface Section {
  subject: string;
  news: string;
}

@Component({
  selector: 'trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  trends: Section[] = [
    {
      subject: 'Hot Technologies in 2019',
      news: 'Spring Boot, Angular, React'
    },
    {
      subject: 'Data Structures to watch out for',
      news: 'Skip lists, Flat Maps, AVL trees'
    },
    {
      subject: 'Online Programming Derby',
      news: 'Participate in our company\'s unique programming contest'
    },
    {
      subject: 'Importance of People Skills',
      news: 'Are you social? Anti-social? A-social? The debate is live!'
    }
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
