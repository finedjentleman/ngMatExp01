import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'languages-developers-report',
  templateUrl: './languages-developers-report.component.html',
  styleUrls: ['./languages-developers-report.component.css']
})
export class LanguagesDevelopersReportComponent implements OnInit {

  public pieChartLabels = ['Java', 'Python', 'Go', 'Angular', 'React', 'SQL', 'Scala', 'R'];
  public pieChartData = [2001, 3902, 1039, 2403, 1509, 2228, 918, 590];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}
