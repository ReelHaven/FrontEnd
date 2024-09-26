import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartContentComponent } from './pie-chart-content.component';

describe('PieChartContentComponent', () => {
  let component: PieChartContentComponent;
  let fixture: ComponentFixture<PieChartContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieChartContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
