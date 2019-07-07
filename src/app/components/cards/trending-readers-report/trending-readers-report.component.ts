import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trending-readers-report',
  templateUrl: './trending-readers-report.component.html',
  styleUrls: ['./trending-readers-report.component.css']
})
export class TrendingReadersReportComponent implements OnInit {

  public pieChartLabels = ['Time Management', 'Soft Skills', 'Extra-curricular', 'Spring Boot', 'Awareness', 'Finding Yourself'];
  public pieChartData = [2909, 813, 3569, 1523, 704, 3699];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}
