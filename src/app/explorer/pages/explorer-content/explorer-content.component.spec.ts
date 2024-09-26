import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerContentComponent } from './explorer-content.component';

describe('ExplorerContentComponent', () => {
  let component: ExplorerContentComponent;
  let fixture: ComponentFixture<ExplorerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorerContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
