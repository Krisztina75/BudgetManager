import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { CostsService } from 'src/app/service/costs.service';

@Component({
  selector: 'app-costs-doughnut-chart',
  templateUrl: './costs-doughnut-chart.component.html',
  styleUrls: ['./costs-doughnut-chart.component.css']
})
export class CostsDoughnutChartComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: SingleDataSet = [350, 450, 100];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() {

  }

  ngOnInit() {
  }

}
