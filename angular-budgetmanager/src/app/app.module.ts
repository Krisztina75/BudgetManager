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

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    ReportsComponent,
    SavingsComponent,
    IncomesTableComponent,
    SumPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
