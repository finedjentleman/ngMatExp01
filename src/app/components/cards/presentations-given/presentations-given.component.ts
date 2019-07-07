import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'presentations-given',
  templateUrl: './presentations-given.component.html',
  styleUrls: ['./presentations-given.component.css']
})
export class PresentationsGivenComponent implements OnInit {

  public doughnutChartLabels = [
    'Management', 'Languages', 'Awareness', 'Social'
  ]
  public doughnutChartData = [ 9, 15, 5, 2];
  public doughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
