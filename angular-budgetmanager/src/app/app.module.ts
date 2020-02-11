import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SavingsComponent } from './pages/savings/savings.component';
import { IncomesTableComponent } from './pages/incomes-table/incomes-table.component';
import { SumPipe } from './pipe/sum.pipe';
import { IncomeVsSpendingComponent } from './pages/income-vs-spending/income-vs-spending.component';
import { SpendingByCategoryComponent } from './pages/spending-by-category/spending-by-category.component';
import { ChartsModule } from 'ng2-charts';
import { CostsDoughnutChartComponent } from './pages/costs-doughnut-chart/costs-doughnut-chart.component';
import { IncomesDoughnutChartComponent } from './pages/incomes-doughnut-chart/incomes-doughnut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    ReportsComponent,
    SavingsComponent,
    IncomesTableComponent,
    SumPipe,
    IncomeVsSpendingComponent,
    SpendingByCategoryComponent,
    CostsDoughnutChartComponent,
    IncomesDoughnutChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
