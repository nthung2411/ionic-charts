import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartistJsComponent } from './chartist-js.component';

describe('ChartistJsComponent', () => {
  let component: ChartistJsComponent;
  let fixture: ComponentFixture<ChartistJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartistJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartistJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
