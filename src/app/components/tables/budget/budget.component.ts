import { Component, OnInit } from '@angular/core';

export interface Transaction{
  item: string;
  cost: number;
}

@Component({
  selector: 'budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  displayedColumns: string[] = ['item','cost'];
  transactions: Transaction[] = [
    {
      item: 'Laptop', cost: 1000 
    },
    {
      item: 'Mug', cost: 10 
    },
    {
      item: 'Painting', cost: 80 
    },
    {
      item: 'Water', cost: 20 
    },
    {
      item: 'Furniture', cost: 700 
    },
  ];

  getTotalCost(){
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  constructor() { }

  ngOnInit() {
  }

}
