import { Component, OnInit } from '@angular/core';
import { Cost } from 'src/app/model/cost';
import { CostsService } from 'src/app/service/costs.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  allData: Cost[] = [];

  constructor(private costService: CostsService) {
    this.costService.getAll().subscribe(costs => this.allData = costs)
  }

  ngOnInit() {
  console.log(this.allData);
  }

}
