import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryDashboardComponent } from './secondary-dashboard.component';

describe('SecondaryDashboardComponent', () => {
  let component: SecondaryDashboardComponent;
  let fixture: ComponentFixture<SecondaryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
