import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/model/income';
import { IncomesService } from 'src/app/service/incomes.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-incomes-table',
  templateUrl: './incomes-table.component.html',
  styleUrls: ['./incomes-table.component.css']
})
export class IncomesTableComponent implements OnInit {
  allData: Income[] = [];
  incomeByCategory: Category[] = [];
  colors = ['#af3500', '#9c7500', '#a51675', '#1e48d1', '#ff0202', '#3d9415', '#f5f241'];

  constructor(private incomeService: IncomesService) {
    this.incomeService.getAll().subscribe(incomes => {
      this.allData = incomes.allIncomeItem;
      this.incomeByCategory = incomes.incomeByCategory;
    })
  }

  ngOnInit() {
  }

}
