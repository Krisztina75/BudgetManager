import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './pages/reports/reports.component';
import { SavingsComponent } from './pages/savings/savings.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { IncomesTableComponent } from './pages/incomes-table/incomes-table.component';


const routes: Routes = [{
  path: 'summary',
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
  path: 'reports/incomes',
  component: IncomesTableComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
