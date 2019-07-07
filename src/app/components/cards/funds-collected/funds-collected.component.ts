import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'funds-collected',
  templateUrl: './funds-collected.component.html',
  styleUrls: ['./funds-collected.component.css']
})
export class FundsCollectedComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';

  funds = 800;
  goal = 1000;
  
  value = this.funds/this.goal * 100;

  constructor() { }

  ngOnInit() {
  }

}
