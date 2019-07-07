import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

//ROUTING
import { AppRoutingModule } from './app-routing.module';

//MATERIAL
import { MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule,
          MatSidenavModule, MatMenuModule, MatDialogModule, MatTooltipModule,
          MatListModule, MatBadgeModule, MatDividerModule,
          MatTabsModule, MatProgressBarModule, MatTableModule, MatInputModule, MatCheckboxModule,
          MatExpansionModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import 'hammerjs';

//CHARTS
import { ChartsModule } from 'ng2-charts';

//COMPONENTS
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { AppComponent } from './app.component';
import { BirthdaysComponent } from './components/cards/birthdays/birthdays.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { GoalsComponent } from './components/goals/goals.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MilestonesPerMonthComponent } from './components/cards/milestones-per-month/milestones-per-month.component';
import { PresentationsAttendedComponent } from './components/cards/presentations-attended/presentations-attended.component';
import { PresentationsGivenComponent } from './components/cards/presentations-given/presentations-given.component';
import { FundsCollectedComponent } from './components/cards/funds-collected/funds-collected.component';
import { BudgetComponent } from './components/tables/budget/budget.component';
import { TasksUrgentComponent } from './components/lists/tasks-urgent/tasks-urgent.component';
import { TasksTodoComponent } from './components/lists/tasks-todo/tasks-todo.component';
import { TasksCompletedComponent } from './components/lists/tasks-completed/tasks-completed.component';
import { PublicProfileComponent } from './components/cards/public-profile/public-profile.component';
import { NotificationSettingsComponent } from './components/cards/notification-settings/notification-settings.component';
import { WhatIsNewComponent } from './components/cards/what-is-new/what-is-new.component';
import { TrendingComponent } from './components/cards/trending/trending.component';
import { TrendingReadersReportComponent } from './components/cards/trending-readers-report/trending-readers-report.component';
import { LanguagesDevelopersReportComponent } from './components/cards/languages-developers-report/languages-developers-report.component';
import { FitnessTimeReportComponent } from './components/cards/fitness-time-report/fitness-time-report.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    BirthdaysComponent,
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    GoalsComponent,
    ReportsComponent,
    SettingsComponent,
    MilestonesPerMonthComponent,
    PresentationsAttendedComponent,
    PresentationsGivenComponent,
    FundsCollectedComponent,
    BudgetComponent,
    TasksUrgentComponent,
    TasksTodoComponent,
    TasksCompletedComponent,
    PublicProfileComponent,
    NotificationSettingsComponent,
    WhatIsNewComponent,
    TrendingComponent,
    TrendingReadersReportComponent,
    LanguagesDevelopersReportComponent,
    FitnessTimeReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //ROUTING
    AppRoutingModule,
    //CHARTS
    ChartsModule,
    //MATERIAL
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatMenuModule,
    MatDialogModule,
    MatTooltipModule,
    MatListModule,
    MatBadgeModule,
    MatDividerModule,
    MatTabsModule,
    MatProgressBarModule,
    MatTableModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
