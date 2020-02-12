import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { CostsService } from 'src/app/service/costs.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-costs-doughnut-chart',
  templateUrl: './costs-doughnut-chart.component.html',
  styleUrls: ['./costs-doughnut-chart.component.css']
})
export class CostsDoughnutChartComponent implements OnInit {
  costByCategory: Category[] = [];

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: SingleDataSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private costService: CostsService) {
    this.costService.getAll().subscribe(costs => {
      this.costByCategory = costs.costByCategory;
      this.doughnutChartLabels = this.costByCategory.map(item => {
        return item.categoryName
      })
      this.doughnutChartData = this.costByCategory.map(item => {
        return item.amountByCategory
      })
    })
  }

  ngOnInit() {
  }

}
