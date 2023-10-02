import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { SecondaryDashboardComponent } from './components/secondary-dashboard/secondary-dashboard.component';


@NgModule({
  declarations: [
    MainDashboardComponent,
    SecondaryDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
