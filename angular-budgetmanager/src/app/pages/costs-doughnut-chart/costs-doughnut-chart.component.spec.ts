import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostsDoughnutChartComponent } from './costs-doughnut-chart.component';

describe('CostsDoughnutChartComponent', () => {
  let component: CostsDoughnutChartComponent;
  let fixture: ComponentFixture<CostsDoughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostsDoughnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostsDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
