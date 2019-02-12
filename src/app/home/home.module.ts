import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartistModule } from 'ng-chartist';

import { HomePage } from './home.page';
import { GoogleChartJsComponent } from '../google-chart-js/google-chart-js.component';
import { ChartistJsComponent } from '../chartist-js/chartist-js.component';

@NgModule({
  imports: [
    ChartistModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    GoogleChartJsComponent,
    ChartistJsComponent
  ]
})
export class HomePageModule { }
