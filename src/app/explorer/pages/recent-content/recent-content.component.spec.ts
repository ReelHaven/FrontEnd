import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentContentComponent } from './recent-content.component';

describe('RecentContentComponent', () => {
  let component: RecentContentComponent;
  let fixture: ComponentFixture<RecentContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
