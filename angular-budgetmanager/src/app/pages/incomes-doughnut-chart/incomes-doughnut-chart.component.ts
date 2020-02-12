import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-incomes-doughnut-chart',
  templateUrl: './incomes-doughnut-chart.component.html',
  styleUrls: ['./incomes-doughnut-chart.component.css']
})
export class IncomesDoughnutChartComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: SingleDataSet = [350, 450, 100];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
