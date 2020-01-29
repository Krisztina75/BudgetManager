import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/model/income';
import { IncomesService } from 'src/app/service/incomes.service';

@Component({
  selector: 'app-incomes-table',
  templateUrl: './incomes-table.component.html',
  styleUrls: ['./incomes-table.component.css']
})
export class IncomesTableComponent implements OnInit {
  allData: Income[] = [];

  constructor(private incomeService: IncomesService) { 
    this.incomeService.getAll().subscribe(income => this.allData = income)
  }

  ngOnInit() {
  }

}
