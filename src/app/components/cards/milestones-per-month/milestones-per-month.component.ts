import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'milestones-per-month',
  templateUrl: './milestones-per-month.component.html',
  styleUrls: ['./milestones-per-month.component.css']
})
export class MilestonesPerMonthComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines : false,
    responsive : true
  };

  public barChartLabels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep',
                            'Oct', 'Nov', 'Dec'];

  public barChartData = [
    {
      data: [ 2, 9, 5, 3, 10, 1, 0, 3, 12, 7, 7, 8 ],
      label: 'Technical'
    },
    {
      data: [ 3, 3, 1, 4, 9, 12, 2, 5, 6, 2, 4, 10 ],
      label: 'Cultural'
    }
  ];

  public barChartType = 'bar';
  public barChartLegend = true;
  
  constructor() { }

  ngOnInit() {
  }

}
