import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'presentations-attended',
  templateUrl: './presentations-attended.component.html',
  styleUrls: ['./presentations-attended.component.css']
})
export class PresentationsAttendedComponent implements OnInit {

  public doughnutChartLabels = [
    'Data Science', 'Reflection', 'Management', 'Resources'
  ]
  public doughnutChartData = [ 7, 4, 8, 6];
  public doughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
