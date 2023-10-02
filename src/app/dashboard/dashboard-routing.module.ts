import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { SecondaryDashboardComponent } from './components/secondary-dashboard/secondary-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-dashboard',
    pathMatch: 'full'
  },
  {
    path: 'main-dashboard',
    component: MainDashboardComponent
  },
  {
    path: 'secondary-dashboard',
    component: SecondaryDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
