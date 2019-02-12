import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleChartJsComponent } from './google-chart-js.component';

describe('GoogleChartJsComponent', () => {
  let component: GoogleChartJsComponent;
  let fixture: ComponentFixture<GoogleChartJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleChartJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleChartJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
