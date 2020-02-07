import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './pages/reports/reports.component';
import { SavingsComponent } from './pages/savings/savings.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { IncomesTableComponent } from './pages/incomes-table/incomes-table.component';
import { IncomeVsSpendingComponent } from './pages/income-vs-spending/income-vs-spending.component';
import { SpendingByCategoryComponent } from './pages/spending-by-category/spending-by-category.component';


const routes: Routes = [{
  path: '',
  component: SummaryComponent
},
{
  path: 'reports',
  component: ReportsComponent
},
{
  path: 'savings',
  component: SavingsComponent
},
{
  path: 'reports/income',
  component: IncomesTableComponent
},
{
  path: 'reports/income-vs-spending',
  component: IncomeVsSpendingComponent
},
{
  path: 'reports/spending-by-category',
  component: SpendingByCategoryComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
