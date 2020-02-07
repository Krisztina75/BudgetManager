import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeVsSpendingComponent } from './income-vs-spending.component';

describe('IncomeVsSpendingComponent', () => {
  let component: IncomeVsSpendingComponent;
  let fixture: ComponentFixture<IncomeVsSpendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeVsSpendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeVsSpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
