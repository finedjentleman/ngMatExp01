import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fitness-time-report',
  templateUrl: './fitness-time-report.component.html',
  styleUrls: ['./fitness-time-report.component.css']
})
export class FitnessTimeReportComponent implements OnInit {

  public radarChartLabels = ['0 Hours', '0-3 Hours', '3-6 Hours', '> 6 Hours'];
  public radarChartData = [
    {
      data: [10001, 6538, 6170, 3567],
      label: 'Men'
    },
    {
      data: [5704, 7602, 3299, 2946],
      label: 'Women'
    }
  ];
  public radarChartType = 'radar';

  constructor() { }

  ngOnInit() {
  }

}
