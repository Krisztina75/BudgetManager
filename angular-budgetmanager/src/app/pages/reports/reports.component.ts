import { Component, OnInit } from '@angular/core';
import { Cost } from 'src/app/model/cost';
import { CostsService } from 'src/app/service/costs.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  allData: Cost[] = [];
  costByCategory: Category[] = [];
  colors = ['#af3500', '#999', '#a51675', '#1e48d1', '#ff0202',
    '#3d9415', '#f5f241', '#00ffff', '#ff009d', '#0a6412', '#ff8800',
    '#9900ff', '#6a9c1f', '#2b5f1e', '#971313', '#069e97'];

  constructor(private costService: CostsService) {
    this.costService.getAll().subscribe(costs => {
      this.allData = costs.allCostItem;
      this.costByCategory = costs.costByCategory;
      console.log(costs);
    })
  }

  ngOnInit() {
  }

}
