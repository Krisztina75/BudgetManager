import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesDoughnutChartComponent } from './incomes-doughnut-chart.component';

describe('IncomesDoughnutChartComponent', () => {
  let component: IncomesDoughnutChartComponent;
  let fixture: ComponentFixture<IncomesDoughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomesDoughnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomesDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
