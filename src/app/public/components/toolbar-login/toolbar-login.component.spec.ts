import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarLoginComponent } from './toolbar-login.component';

describe('ToolbarLoginComponent', () => {
  let component: ToolbarLoginComponent;
  let fixture: ComponentFixture<ToolbarLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
