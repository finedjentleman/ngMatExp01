import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { GoalsComponent } from './components/goals/goals.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
    
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'goals',
    component: GoalsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
