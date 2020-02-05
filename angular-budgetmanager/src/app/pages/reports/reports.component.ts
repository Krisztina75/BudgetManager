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
  allCategories: Category[] = [];
  amountByCategory: number;

  constructor(private costService: CostsService) {
    this.costService.getAll().subscribe(costs => {
      this.allData = costs.allCostItem;
      this.allCategories = costs.categories;
      console.log(this.allCategories);
    })
  }

  ngOnInit() {
  }

}
