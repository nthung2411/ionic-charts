import { Component } from '@angular/core';
import {
  IBarChartOptions,
  IChartistAnimationOptions,
  IChartistData
} from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

@Component({
  selector: 'app-chartist-js',
  templateUrl: './chartist-js.component.html',
  styleUrls: ['./chartist-js.component.scss']
})
export class ChartistJsComponent {

  type: ChartType = 'Bar';
  data: IChartistData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr'
    ],
    series: [
      [5, 4, 3, 7],
      [3, 2, 9, 5]
    ]
  };

  options: IBarChartOptions = {
    axisX: {
      showGrid: true
    },
    height: 300
  };

  events: ChartEvent = {
    draw: (data) => {
      if (data.type === 'bar') {
        data.element.animate({
          y2: <IChartistAnimationOptions>{
            dur: '0.5s',
            from: data.y1,
            to: data.y2,
            easing: 'easeOutQuad'
          }
        });
      }
    }
  };

}
