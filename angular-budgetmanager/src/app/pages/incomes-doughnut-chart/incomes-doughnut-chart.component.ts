import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { IncomesService } from 'src/app/service/incomes.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-incomes-doughnut-chart',
  templateUrl: './incomes-doughnut-chart.component.html',
  styleUrls: ['./incomes-doughnut-chart.component.css']
})
export class IncomesDoughnutChartComponent implements OnInit {
  incomeByCategory: Category[] = [];

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: SingleDataSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions = {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 20,
        bottom: 0
      }
    },
    legend: {
      position: 'right'
    }
  };

  constructor(private incomeService: IncomesService) {
    this.incomeService.getAll().subscribe(incomes => {
      this.incomeByCategory = incomes.incomeByCategory;
      this.doughnutChartLabels = this.incomeByCategory.map(item => {
        return item.categoryName
      })
      this.doughnutChartData = this.incomeByCategory.map(item => {
        return item.amountByCategory
      })
    })
  }

  ngOnInit() {
  }

}
