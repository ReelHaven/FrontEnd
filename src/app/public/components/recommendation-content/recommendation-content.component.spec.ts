import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationContentComponent } from './recommendation-content.component';

describe('RecommendationContentComponent', () => {
  let component: RecommendationContentComponent;
  let fixture: ComponentFixture<RecommendationContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
